import { gql } from 'graphql-tag'
import type { SubjectPKPStream } from '@prisma/client'
import { ComposeDB } from './index.js'
import {
  CreateSubjectPKPInput,
  CreateSubjectPKPMutation,
  UpdateSubjectPKPInput,
  UpdateSubjectPKPMutation,
  SubjectPKPInput,
} from '../types.js'
import {
  CreateSubjectPKPInputSchema,
  UpdateSubjectPKPInputSchema,
  SubjectPKPInputSchema,
} from '../validation.js'
import {
  CreateSubjectPKPDocument,
  UpdateSubjectPKPDocument,
} from '../queries.js'
import { Expand } from '../../utils/types.js'

export type ParsedSubjectPKPStream<T extends SubjectPKPStream> = T & {
  data: SubjectPKPInput
}

export class SubjectPKPService {
  private _client: ComposeDB

  constructor(client: ComposeDB) {
    this._client = client
  }

  parse<T extends SubjectPKPStream>(
    subjectPKPStream: T
  ): ParsedSubjectPKPStream<T> {
    return {
      ...subjectPKPStream,
      data: SubjectPKPInputSchema().parse(subjectPKPStream.stream_content),
    }
  }

  async create(
    input: Expand<CreateSubjectPKPInput>
  ): Promise<CreateSubjectPKPMutation> {
    return await this._client.composeMutation<
      CreateSubjectPKPInput,
      CreateSubjectPKPMutation
    >(CreateSubjectPKPDocument, input, CreateSubjectPKPInputSchema())
  }

  async update(
    input: Expand<UpdateSubjectPKPInput>
  ): Promise<UpdateSubjectPKPMutation> {
    return await this._client.composeMutation<
      UpdateSubjectPKPInput,
      UpdateSubjectPKPMutation
    >(UpdateSubjectPKPDocument, input, UpdateSubjectPKPInputSchema())
  }
}
