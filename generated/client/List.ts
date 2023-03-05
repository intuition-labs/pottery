import { gql } from 'graphql-tag'
import type { ListStream } from '@prisma/client'
import { ComposeDB } from './index.js'
import {
  CreateListInput,
  CreateListMutation,
  UpdateListInput,
  UpdateListMutation,
  ListInput,
} from '../types.js'
import {
  CreateListInputSchema,
  UpdateListInputSchema,
  ListInputSchema,
} from '../validation.js'
import {
  CreateListDocument,
  UpdateListDocument,
} from '../queries.js'
import { Expand } from '../../utils/types.js'

export type ParsedListStream<T extends ListStream> = T & {
  data: ListInput
}

export class ListService {
  private _client: ComposeDB

  constructor(client: ComposeDB) {
    this._client = client
  }

  parse<T extends ListStream>(
    listStream: T
  ): ParsedListStream<T> {
    return {
      ...listStream,
      data: ListInputSchema().parse(listStream.stream_content),
    }
  }

  async create(
    input: Expand<CreateListInput>
  ): Promise<CreateListMutation> {
    return await this._client.composeMutation<
      CreateListInput,
      CreateListMutation
    >(CreateListDocument, input, CreateListInputSchema())
  }

  async update(
    input: Expand<UpdateListInput>
  ): Promise<UpdateListMutation> {
    return await this._client.composeMutation<
      UpdateListInput,
      UpdateListMutation
    >(UpdateListDocument, input, UpdateListInputSchema())
  }
}
