import { CeramicClient } from '@ceramicnetwork/http-client'
import { Composite, createRuntimeDefinition } from '@composedb/devtools'
import {
  mergeEncodedComposites,
  readEncodedComposite,
  writeEncodedComposite,
  writeEncodedCompositeRuntime,
} from '@composedb/devtools-node'
import { DID } from 'dids'
import dotenv from 'dotenv'
import { readdir, readFile, writeFile } from 'fs/promises'
import { DocumentNode, parse, visit, BREAK, ObjectTypeDefinitionNode, ArgumentNode } from 'graphql'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
// @ts-ignore
import { fromString } from 'uint8arrays/from-string'
import path from 'path'
import util from 'util'
import { execSync } from 'child_process'
import { dir } from 'console'
import { existsSync, mkdirSync } from 'fs'
dotenv.config()

const DEPLOY = false

const MODEL_DIR = 'models'
const GENERATED_BASE_DIR = 'generated/'
const COMPOSITE_OUT_DIR = GENERATED_BASE_DIR + 'composites/'
const MERGED_COMPOSITE_PATH = COMPOSITE_OUT_DIR + 'index'
const MUTATION_QUERY_PATH = GENERATED_BASE_DIR + 'queries.ts'
const PRISMA_SCHEMA_PATH = GENERATED_BASE_DIR + 'schema.prisma'
const TEMPLATES_DIR = 'scripts/templates/'
const CLIENT_OUTPUT_DIR = GENERATED_BASE_DIR + 'client/'

interface CompositeParams {
  name: string
  content: string
  ceramic: CeramicClient
}

async function main() {
  // initialize the ceramic client
  const clientURL = process.env.CERAMIC_URL
  if (!clientURL) throw Error('Must specify CERAMIC_URL in `.env`')
  console.log(`obtaining ceramic client at ${clientURL}`)
  const ceramic = new CeramicClient(clientURL)

  // authenticate with the ceramic client
  console.log('authenticating...')
  const pk = process.env.COMPOSEDB_PRIVATE_KEY
  if (!pk) throw Error('Must specify COMPOSEDB_PRIVATE_KEY in `.env`')
  const key = fromString(pk, 'base16')
  const did = new DID({
    resolver: getResolver(),
    provider: new Ed25519Provider(key),
  })
  await did.authenticate()
  ceramic.did = did

  // find all the files
  const files = await readdir(MODEL_DIR)
  const embeds: string[] = []
  let composites: { [key: string]: Composite } = {}
  const paths: string[] = []

  // parse each one and generate a composite
  async function generateComposite(params: CompositeParams) {
    const { name, content, ceramic } = params
    console.log(`generating composite ${name}`)
    let composite = await Composite.create({
      ceramic,
      schema: content,
      index: false,
    })
    composite = composite.setAliases({ [name]: composite.toRuntime().models[name].id })
    const p = COMPOSITE_OUT_DIR + `${name}.json`
    await writeEncodedComposite(composite, p)
    return { composite, path: p }
  }
  for (const file of files) {
    let content = await readFile(MODEL_DIR + '/' + file, 'utf-8')
    const gql = parse(content)
    let name: string | undefined = ''

    // get the shared objects
    visit(gql, {
      ObjectTypeDefinition: {
        enter: (node) => {
          if (!node.directives?.map((d) => d.name.value).length && node.loc?.source.body)
            embeds.push(node.loc.source.body.slice(node.loc.start, node.loc.end))
          if (node.directives?.map((d) => d.name.value)[0] == 'createModel') name = node.name.value
        },
      },
    })

    // replace any templates with model id's
    const matches = content.match(/\${\S*}/gm)
    if (matches) {
      for (const k of Object.keys(composites)) {
        content = content.replaceAll('${' + k + '}', composites[k].toRuntime().models[k].id)
      }
    }

    // generate the composite
    if (name) {
      const { composite, path } = await generateComposite({
        name,
        ceramic,
        content: embeds.join('\n') + '\n' + content,
      })
      composites[name] = composite
      paths.push(path)
    }
  }

  // merge composites
  await mergeEncodedComposites(ceramic, paths, MERGED_COMPOSITE_PATH + '.json')

  // write runtime
  await writeEncodedCompositeRuntime(
    ceramic,
    MERGED_COMPOSITE_PATH + '.json',
    MERGED_COMPOSITE_PATH + '.ts',
    path.join(GENERATED_BASE_DIR, 'schema.graphql')
  )

  // deploy
  if (DEPLOY) {
    const deployComposite = await readEncodedComposite(ceramic, MERGED_COMPOSITE_PATH + '.json', true)
    await deployComposite.startIndexingOn(ceramic)
  }

  // import the newly generated definitions
  const { definition } = await import('../generated/composites/index.js')

  // generate the create and update queries
  console.log('generating queries...')
  let queryContent = `
  import { gql } from 'graphql-tag'

  `
  for (const m of Object.keys(definition.models)) {
    queryContent += `

    export const Create${m}Document = gql\`
      mutation Create${m}($input: Create${m}Input!) {
        create${m}(input: $input) {
          document {
            id
          }
        }
      }
    \`

    export const Update${m}Document = gql\`
      mutation Update${m}($input: Update${m}Input!) {
        update${m}(input: $input) {
          document {
            id
          }
        }
      }
    \`

    `
  }
  await writeFile(MUTATION_QUERY_PATH, queryContent)

  // run graphql codegen
  console.log('running graphql codegen')
  execSync('graphql-codegen -d')

  // run prisma schema generation
  console.log('generating prisma schema')
  const PRISMA_SCHEMA_START = `
  generator client {
    provider = "prisma-client-js"
    previewFeatures = ["fieldReference", "filteredRelationCount", "fullTextSearch"]
  }

  datasource db {
    provider     = "postgresql"
    url          = env("COMPOSEDB_POSTGRES_URL")
    relationMode = "prisma"
  }
`
  let schema = PRISMA_SCHEMA_START
  const relations: { [key: string]: string[] } = {}
  // iterate through models to find relations
  Object.keys(definition.models).forEach((k) => {
    relations[k] = []
    // iteracte through fields to find relations
    Object.keys(definition.objects[k]).forEach((f) => {
      const fieldMeta = definition.objects[k][f]
      if (fieldMeta['type'] == 'view' && fieldMeta['viewType'] == 'relation') {
        const foreignTable = Object.keys(definition.models).find(
          (tName) => definition.models[tName].id == fieldMeta['relation'].model
        )
        if (foreignTable) {
          switch (fieldMeta['relation'].source) {
            case 'queryConnection':
              relations[k].push(
                `${f} ${foreignTable}Stream[] @relation("${fieldMeta['relation']['property'].toLowerCase()}")`
              )
              break
            case 'document':
              relations[k].push(
                `${f} ${foreignTable}Stream? @relation(name: "${fieldMeta['relation'][
                  'property'
                ].toLowerCase()}", fields: [${
                  fieldMeta['relation']['property']
                }], references: [stream_id], map: "${f}-${fieldMeta['relation']['property']}")`
              )
              relations[foreignTable].push(
                `${k.toLowerCase()}s ${k}Stream[] @relation(name: "${fieldMeta['relation']['property'].toLowerCase()}")`
              )
              relations[k].push(`${fieldMeta['relation']['property']} String`)
              break
            default:
              break
          }
        }
      }
    })
  })
  // one more time to put it all together
  Object.keys(definition.models).forEach((k) => {
    // iteracte through fields to find relations
    schema += `
model ${k}Stream {
  stream_id String @id
  ${relations[k]?.join('\n')}
  @@map("${definition.models[k].id}")
}
`
  })
  await writeFile(PRISMA_SCHEMA_PATH, schema)

  // pull db config for prisma
  console.log('pulling prisma db config')
  execSync(`prisma db pull --schema ${GENERATED_BASE_DIR}/schema.prisma`)

  // generate client for prisma
  console.log('generating prisma client')
  execSync(`prisma generate --schema ${GENERATED_BASE_DIR}/schema.prisma`)

  // generate composedb client service files
  console.log('generating composedb client')
  if (!existsSync(CLIENT_OUTPUT_DIR)) {
    mkdirSync(CLIENT_OUTPUT_DIR)
  }
  const serviceTemplate = await readFile(TEMPLATES_DIR + 'service.ts.tmpl', 'utf-8')
  for (const k of Object.keys(definition.models)) {
    const output = serviceTemplate
      .replaceAll('${MODEL_NAME}', k)
      .replaceAll('${MODEL_NAME_LOWERCASE}', k.charAt(0).toLowerCase() + k.slice(1))
    await writeFile(CLIENT_OUTPUT_DIR + `${k}.ts`, output)
  }

  // generate composedb core client file
  const indexTemplate = await readFile(TEMPLATES_DIR + 'index.ts.tmpl', 'utf-8')
  let serviceImports = ''
  let serviceProperties = ''
  let serviceConstructor = ''
  for (const k of Object.keys(definition.models)) {
    serviceImports += `import \{${k}Service\} from './${k}.js'\n`
    serviceProperties += `readonly ${k.charAt(0).toLowerCase() + k.slice(1)}: ${k}Service\n`
    serviceConstructor += `this.${k.charAt(0).toLowerCase() + k.slice(1)} = new ${k}Service(this)\n`
  }
  await writeFile(
    CLIENT_OUTPUT_DIR + `index.ts`,
    indexTemplate
      .replaceAll('${SERVICE_IMPORTS}', serviceImports)
      .replaceAll('${SERVICE_PROPERTIES}', serviceProperties)
      .replaceAll('${SERVICE_CONSTRUCTOR}', serviceConstructor)
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
