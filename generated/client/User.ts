import { gql } from 'graphql-tag'
import type { UserStream } from '@prisma/client'
import { ComposeDB } from './index.js'
import {
  CreateUserInput,
  CreateUserMutation,
  UpdateUserInput,
  UpdateUserMutation,
  UserInput,
} from '../types.js'
import {
  CreateUserInputSchema,
  UpdateUserInputSchema,
  UserInputSchema,
} from '../validation.js'
import {
  CreateUserDocument,
  UpdateUserDocument,
} from '../queries.js'
import { Expand } from '../../utils/types.js'

export type ParsedUserStream<T extends UserStream> = T & {
  data: UserInput
}

export class UserService {
  private _client: ComposeDB

  constructor(client: ComposeDB) {
    this._client = client
  }

  parse<T extends UserStream>(
    userStream: T
  ): ParsedUserStream<T> {
    return {
      ...userStream,
      data: UserInputSchema().parse(userStream.stream_content),
    }
  }

  async create(
    input: Expand<CreateUserInput>
  ): Promise<CreateUserMutation> {
    return await this._client.composeMutation<
      CreateUserInput,
      CreateUserMutation
    >(CreateUserDocument, input, CreateUserInputSchema())
  }

  async update(
    input: Expand<UpdateUserInput>
  ): Promise<UpdateUserMutation> {
    return await this._client.composeMutation<
      UpdateUserInput,
      UpdateUserMutation
    >(UpdateUserDocument, input, UpdateUserInputSchema())
  }
}
