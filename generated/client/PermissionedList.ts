import { gql } from 'graphql-tag'
import type { PermissionedListStream } from '@prisma/client'
import { ComposeDB } from './index.js'
import {
  CreatePermissionedListInput,
  CreatePermissionedListMutation,
  UpdatePermissionedListInput,
  UpdatePermissionedListMutation,
  PermissionedListInput,
} from '../types.js'
import {
  CreatePermissionedListInputSchema,
  UpdatePermissionedListInputSchema,
  PermissionedListInputSchema,
} from '../validation.js'
import {
  CreatePermissionedListDocument,
  UpdatePermissionedListDocument,
} from '../queries.js'
import { Expand } from '../../utils/types.js'

export type ParsedPermissionedListStream<T extends PermissionedListStream> = T & {
  data: PermissionedListInput
}

export class PermissionedListService {
  private _client: ComposeDB

  constructor(client: ComposeDB) {
    this._client = client
  }

  parse<T extends PermissionedListStream>(
    permissionedListStream: T
  ): ParsedPermissionedListStream<T> {
    return {
      ...permissionedListStream,
      data: PermissionedListInputSchema().parse(permissionedListStream.stream_content),
    }
  }

  async create(
    input: Expand<CreatePermissionedListInput>
  ): Promise<CreatePermissionedListMutation> {
    return await this._client.composeMutation<
      CreatePermissionedListInput,
      CreatePermissionedListMutation
    >(CreatePermissionedListDocument, input, CreatePermissionedListInputSchema())
  }

  async update(
    input: Expand<UpdatePermissionedListInput>
  ): Promise<UpdatePermissionedListMutation> {
    return await this._client.composeMutation<
      UpdatePermissionedListInput,
      UpdatePermissionedListMutation
    >(UpdatePermissionedListDocument, input, UpdatePermissionedListInputSchema())
  }
}
