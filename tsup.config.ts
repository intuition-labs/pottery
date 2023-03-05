import type { Options } from 'tsup'

export const tsup: Options = {
  clean: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  platform: 'node',
  format: ['esm'],
  outDir: 'dist',
  target: 'esnext',
  entry: [
    'src/index.ts',
    'src/relay/index.ts',
    'src/relay/lit/index.ts',
    'src/relay/contracts/index.ts',
    'src/relay/composedb/index.ts',
    'src/generated/index.ts',
    'src/generated/validation.ts',
    'src/generated/types.ts',
  ],
  noExternal: [
    '@didtools/cacao',
    'did-session',
    'uint8arrays',
    '@composedb/client',
    '@0xintuition/contracts',
    '@0xintuition/ethdenver-hackathon-2023-contracts',
  ],
  onSuccess: 'cp src/generated/schema.graphql dist/schema.graphql',
}
