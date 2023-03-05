// THIS FILE IS GENERATED, DO NOT EDIT!
import { DID } from 'dids'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A Ceramic Commit ID */
  CeramicCommitID: string;
  /** A Ceramic Stream ID */
  CeramicStreamID: string;
}

export interface CeramicAccount extends Node {
  entryList?: Maybe<EntryConnection>;
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean'];
  listList?: Maybe<ListConnection>;
  permissionedListList?: Maybe<PermissionedListConnection>;
  subjectPkpList?: Maybe<SubjectPKPConnection>;
  user?: Maybe<User>;
}


export interface CeramicAccountentryListArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface CeramicAccountlistListArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface CeramicAccountpermissionedListListArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface CeramicAccountsubjectPkpListArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

export interface CreateEntryInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: EntryInput;
}

export interface CreateEntryPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: Entry;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface CreateEntryPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface CreateListInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: ListInput;
}

export interface CreateListPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: List;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface CreateListPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface CreatePermissionedListInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PermissionedListInput;
}

export interface CreatePermissionedListPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: PermissionedList;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface CreatePermissionedListPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface CreateSubjectPKPInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: SubjectPKPInput;
}

export interface CreateSubjectPKPPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: SubjectPKP;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface CreateSubjectPKPPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface CreateUserInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: UserInput;
}

export interface CreateUserPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: User;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface CreateUserPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface Entry extends Node {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<EntryImageSources>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface EntryConnection {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EntryEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface EntryEdge {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Entry>;
}

export interface EntryImageMetadata {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface EntryImageMetadataInput {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface EntryImageSources {
  alternatives?: Maybe<Array<Maybe<EntryImageMetadata>>>;
  original: EntryImageMetadata;
}

export interface EntryImageSourcesInput {
  alternatives?: InputMaybe<Array<InputMaybe<EntryImageMetadataInput>>>;
  original: EntryImageMetadataInput;
}

export interface EntryInput {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<EntryImageSourcesInput>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
}

export interface List extends Node {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<ListImageSources>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface ListConnection {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ListEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface ListEdge {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<List>;
}

export interface ListImageMetadata {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface ListImageMetadataInput {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface ListImageSources {
  alternatives?: Maybe<Array<Maybe<ListImageMetadata>>>;
  original: ListImageMetadata;
}

export interface ListImageSourcesInput {
  alternatives?: InputMaybe<Array<InputMaybe<ListImageMetadataInput>>>;
  original: ListImageMetadataInput;
}

export interface ListInput {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ListImageSourcesInput>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
}

export interface Mutation {
  createEntry?: Maybe<CreateEntryPayload>;
  createList?: Maybe<CreateListPayload>;
  createPermissionedList?: Maybe<CreatePermissionedListPayload>;
  createSubjectPKP?: Maybe<CreateSubjectPKPPayload>;
  createUser?: Maybe<CreateUserPayload>;
  updateEntry?: Maybe<UpdateEntryPayload>;
  updateList?: Maybe<UpdateListPayload>;
  updatePermissionedList?: Maybe<UpdatePermissionedListPayload>;
  updateSubjectPKP?: Maybe<UpdateSubjectPKPPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
}


export interface MutationcreateEntryArgs {
  input: CreateEntryInput;
}


export interface MutationcreateListArgs {
  input: CreateListInput;
}


export interface MutationcreatePermissionedListArgs {
  input: CreatePermissionedListInput;
}


export interface MutationcreateSubjectPKPArgs {
  input: CreateSubjectPKPInput;
}


export interface MutationcreateUserArgs {
  input: CreateUserInput;
}


export interface MutationupdateEntryArgs {
  input: UpdateEntryInput;
}


export interface MutationupdateListArgs {
  input: UpdateListInput;
}


export interface MutationupdatePermissionedListArgs {
  input: UpdatePermissionedListInput;
}


export interface MutationupdateSubjectPKPArgs {
  input: UpdateSubjectPKPInput;
}


export interface MutationupdateUserArgs {
  input: UpdateUserInput;
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID'];
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
}

export interface PartialEntryInput {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<EntryImageSourcesInput>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface PartialListInput {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ListImageSourcesInput>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface PartialPermissionedListInput {
  listId?: InputMaybe<Scalars['CeramicStreamID']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface PartialSubjectPKPInput {
  pkpId?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
}

export interface PartialUserInput {
  description?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  hello?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<UserImageSourcesInput>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface PermissionedList extends Node {
  id: Scalars['ID'];
  list?: Maybe<List>;
  listId: Scalars['CeramicStreamID'];
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** A connection to a list of items. */
export interface PermissionedListConnection {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PermissionedListEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface PermissionedListEdge {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PermissionedList>;
}

export interface PermissionedListInput {
  listId: Scalars['CeramicStreamID'];
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Query {
  entryIndex?: Maybe<EntryConnection>;
  listIndex?: Maybe<ListConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  permissionedListIndex?: Maybe<PermissionedListConnection>;
  subjectPKPIndex?: Maybe<SubjectPKPConnection>;
  userIndex?: Maybe<UserConnection>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface QueryentryIndexArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface QuerylistIndexArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface QuerynodeArgs {
  id: Scalars['ID'];
}


export interface QuerypermissionedListIndexArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface QuerysubjectPKPIndexArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}


export interface QueryuserIndexArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

export interface SubjectPKP extends Node {
  id: Scalars['ID'];
  pkpId: Scalars['String'];
  subject: Scalars['String'];
}

/** A connection to a list of items. */
export interface SubjectPKPConnection {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubjectPKPEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface SubjectPKPEdge {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SubjectPKP>;
}

export interface SubjectPKPInput {
  pkpId: Scalars['String'];
  subject: Scalars['String'];
}

export interface UpdateEntryInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialEntryInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
}

export interface UpdateEntryPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: Entry;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface UpdateEntryPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface UpdateListInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialListInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
}

export interface UpdateListPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: List;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface UpdateListPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface UpdateOptionsInput {
  /** Fully replace the document contents instead of performing a shallow merge */
  replace?: InputMaybe<Scalars['Boolean']>;
  /** Only perform mutation if the document matches the provided version */
  version?: InputMaybe<Scalars['CeramicCommitID']>;
}

export interface UpdatePermissionedListInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPermissionedListInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
}

export interface UpdatePermissionedListPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: PermissionedList;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface UpdatePermissionedListPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface UpdateSubjectPKPInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialSubjectPKPInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
}

export interface UpdateSubjectPKPPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: SubjectPKP;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface UpdateSubjectPKPPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface UpdateUserInput {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialUserInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
}

export interface UpdateUserPayload {
  clientMutationId?: Maybe<Scalars['String']>;
  document: User;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
}


export interface UpdateUserPayloadnodeArgs {
  id: Scalars['ID'];
}

export interface User extends Node {
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  hello?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UserImageSources>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface UserConnection {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface UserEdge {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<User>;
}

export interface UserImageMetadata {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface UserImageMetadataInput {
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  width: Scalars['Int'];
}

export interface UserImageSources {
  alternatives?: Maybe<Array<Maybe<UserImageMetadata>>>;
  original: UserImageMetadata;
}

export interface UserImageSourcesInput {
  alternatives?: InputMaybe<Array<InputMaybe<UserImageMetadataInput>>>;
  original: UserImageMetadataInput;
}

export interface UserInput {
  description?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  hello?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<UserImageSourcesInput>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
}

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { createUser?: { document: { id: string } } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { updateUser?: { document: { id: string } } | null };

export type CreateSubjectPKPMutationVariables = Exact<{
  input: CreateSubjectPKPInput;
}>;


export type CreateSubjectPKPMutation = { createSubjectPKP?: { document: { id: string } } | null };

export type UpdateSubjectPKPMutationVariables = Exact<{
  input: UpdateSubjectPKPInput;
}>;


export type UpdateSubjectPKPMutation = { updateSubjectPKP?: { document: { id: string } } | null };

export type CreateEntryMutationVariables = Exact<{
  input: CreateEntryInput;
}>;


export type CreateEntryMutation = { createEntry?: { document: { id: string } } | null };

export type UpdateEntryMutationVariables = Exact<{
  input: UpdateEntryInput;
}>;


export type UpdateEntryMutation = { updateEntry?: { document: { id: string } } | null };

export type CreateListMutationVariables = Exact<{
  input: CreateListInput;
}>;


export type CreateListMutation = { createList?: { document: { id: string } } | null };

export type UpdateListMutationVariables = Exact<{
  input: UpdateListInput;
}>;


export type UpdateListMutation = { updateList?: { document: { id: string } } | null };

export type CreatePermissionedListMutationVariables = Exact<{
  input: CreatePermissionedListInput;
}>;


export type CreatePermissionedListMutation = { createPermissionedList?: { document: { id: string } } | null };

export type UpdatePermissionedListMutationVariables = Exact<{
  input: UpdatePermissionedListInput;
}>;


export type UpdatePermissionedListMutation = { updatePermissionedList?: { document: { id: string } } | null };
