import { gql } from 'graphql-tag'
import type { EntryStream } from '@prisma/client'
import { ComposeDB } from './index.js'
import {
  CreateEntryInput,
  CreateEntryMutation,
  UpdateEntryInput,
  UpdateEntryMutation,
  EntryInput,
} from '../types.js'
import {
  CreateEntryInputSchema,
  UpdateEntryInputSchema,
  EntryInputSchema,
} from '../validation.js'
import {
  CreateEntryDocument,
  UpdateEntryDocument,
} from '../queries.js'
import { Expand } from '../../utils/types.js'

export type ParsedEntryStream<T extends EntryStream> = T & {
  data: EntryInput
}

export class EntryService {
  private _client: ComposeDB

  constructor(client: ComposeDB) {
    this._client = client
  }

  parse<T extends EntryStream>(
    entryStream: T
  ): ParsedEntryStream<T> {
    return {
      ...entryStream,
      data: EntryInputSchema().parse(entryStream.stream_content),
    }
  }

  async create(
    input: Expand<CreateEntryInput>
  ): Promise<CreateEntryMutation> {
    return await this._client.composeMutation<
      CreateEntryInput,
      CreateEntryMutation
    >(CreateEntryDocument, input, CreateEntryInputSchema())
  }

  async update(
    input: Expand<UpdateEntryInput>
  ): Promise<UpdateEntryMutation> {
    return await this._client.composeMutation<
      UpdateEntryInput,
      UpdateEntryMutation
    >(UpdateEntryDocument, input, UpdateEntryInputSchema())
  }
}
