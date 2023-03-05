// THIS FILE IS GENERATED, DO NOT EDIT!
import { z } from 'zod'
import { CreateEntryInput, CreateListInput, CreatePermissionedListInput, CreateSubjectPKPInput, CreateUserInput, EntryImageMetadataInput, EntryImageSourcesInput, EntryInput, ListImageMetadataInput, ListImageSourcesInput, ListInput, PartialEntryInput, PartialListInput, PartialPermissionedListInput, PartialSubjectPKPInput, PartialUserInput, PermissionedListInput, SubjectPKPInput, UpdateEntryInput, UpdateListInput, UpdateOptionsInput, UpdatePermissionedListInput, UpdateSubjectPKPInput, UpdateUserInput, UserImageMetadataInput, UserImageSourcesInput, UserInput } from './types.js'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function CreateEntryInputSchema(): z.ZodObject<Properties<CreateEntryInput>> {
  return z.object<Properties<CreateEntryInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => EntryInputSchema())
  })
}

export function CreateListInputSchema(): z.ZodObject<Properties<CreateListInput>> {
  return z.object<Properties<CreateListInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => ListInputSchema())
  })
}

export function CreatePermissionedListInputSchema(): z.ZodObject<Properties<CreatePermissionedListInput>> {
  return z.object<Properties<CreatePermissionedListInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PermissionedListInputSchema())
  })
}

export function CreateSubjectPKPInputSchema(): z.ZodObject<Properties<CreateSubjectPKPInput>> {
  return z.object<Properties<CreateSubjectPKPInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => SubjectPKPInputSchema())
  })
}

export function CreateUserInputSchema(): z.ZodObject<Properties<CreateUserInput>> {
  return z.object<Properties<CreateUserInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => UserInputSchema())
  })
}

export function EntryImageMetadataInputSchema(): z.ZodObject<Properties<EntryImageMetadataInput>> {
  return z.object<Properties<EntryImageMetadataInput>>({
    height: z.number(),
    mimeType: z.string(),
    size: z.number().nullish(),
    src: z.string(),
    width: z.number()
  })
}

export function EntryImageSourcesInputSchema(): z.ZodObject<Properties<EntryImageSourcesInput>> {
  return z.object<Properties<EntryImageSourcesInput>>({
    alternatives: z.array(z.lazy(() => EntryImageMetadataInputSchema().nullable())).nullish(),
    original: z.lazy(() => EntryImageMetadataInputSchema())
  })
}

export function EntryInputSchema(): z.ZodObject<Properties<EntryInput>> {
  return z.object<Properties<EntryInput>>({
    description: z.string().nullish(),
    image: z.lazy(() => EntryImageSourcesInputSchema().nullish()),
    name: z.string(),
    url: z.string().nullish()
  })
}

export function ListImageMetadataInputSchema(): z.ZodObject<Properties<ListImageMetadataInput>> {
  return z.object<Properties<ListImageMetadataInput>>({
    height: z.number(),
    mimeType: z.string(),
    size: z.number().nullish(),
    src: z.string(),
    width: z.number()
  })
}

export function ListImageSourcesInputSchema(): z.ZodObject<Properties<ListImageSourcesInput>> {
  return z.object<Properties<ListImageSourcesInput>>({
    alternatives: z.array(z.lazy(() => ListImageMetadataInputSchema().nullable())).nullish(),
    original: z.lazy(() => ListImageMetadataInputSchema())
  })
}

export function ListInputSchema(): z.ZodObject<Properties<ListInput>> {
  return z.object<Properties<ListInput>>({
    description: z.string().nullish(),
    image: z.lazy(() => ListImageSourcesInputSchema().nullish()),
    name: z.string(),
    url: z.string().nullish()
  })
}

export function PartialEntryInputSchema(): z.ZodObject<Properties<PartialEntryInput>> {
  return z.object<Properties<PartialEntryInput>>({
    description: z.string().nullish(),
    image: z.lazy(() => EntryImageSourcesInputSchema().nullish()),
    name: z.string().nullish(),
    url: z.string().nullish()
  })
}

export function PartialListInputSchema(): z.ZodObject<Properties<PartialListInput>> {
  return z.object<Properties<PartialListInput>>({
    description: z.string().nullish(),
    image: z.lazy(() => ListImageSourcesInputSchema().nullish()),
    name: z.string().nullish(),
    url: z.string().nullish()
  })
}

export function PartialPermissionedListInputSchema(): z.ZodObject<Properties<PartialPermissionedListInput>> {
  return z.object<Properties<PartialPermissionedListInput>>({
    listId: definedNonNullAnySchema.nullish(),
    name: z.string().nullish(),
    users: z.array(z.string().nullable()).nullish()
  })
}

export function PartialSubjectPKPInputSchema(): z.ZodObject<Properties<PartialSubjectPKPInput>> {
  return z.object<Properties<PartialSubjectPKPInput>>({
    pkpId: z.string().nullish(),
    subject: z.string().nullish()
  })
}

export function PartialUserInputSchema(): z.ZodObject<Properties<PartialUserInput>> {
  return z.object<Properties<PartialUserInput>>({
    description: z.string().nullish(),
    emoji: z.string().nullish(),
    hello: z.string().nullish(),
    image: z.lazy(() => UserImageSourcesInputSchema().nullish()),
    name: z.string().nullish(),
    url: z.string().nullish()
  })
}

export function PermissionedListInputSchema(): z.ZodObject<Properties<PermissionedListInput>> {
  return z.object<Properties<PermissionedListInput>>({
    listId: definedNonNullAnySchema,
    name: z.string(),
    users: z.array(z.string().nullable()).nullish()
  })
}

export function SubjectPKPInputSchema(): z.ZodObject<Properties<SubjectPKPInput>> {
  return z.object<Properties<SubjectPKPInput>>({
    pkpId: z.string(),
    subject: z.string()
  })
}

export function UpdateEntryInputSchema(): z.ZodObject<Properties<UpdateEntryInput>> {
  return z.object<Properties<UpdateEntryInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PartialEntryInputSchema()),
    id: z.string(),
    options: z.lazy(() => UpdateOptionsInputSchema().nullish())
  })
}

export function UpdateListInputSchema(): z.ZodObject<Properties<UpdateListInput>> {
  return z.object<Properties<UpdateListInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PartialListInputSchema()),
    id: z.string(),
    options: z.lazy(() => UpdateOptionsInputSchema().nullish())
  })
}

export function UpdateOptionsInputSchema(): z.ZodObject<Properties<UpdateOptionsInput>> {
  return z.object<Properties<UpdateOptionsInput>>({
    replace: z.boolean().nullish(),
    version: definedNonNullAnySchema.nullish()
  })
}

export function UpdatePermissionedListInputSchema(): z.ZodObject<Properties<UpdatePermissionedListInput>> {
  return z.object<Properties<UpdatePermissionedListInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PartialPermissionedListInputSchema()),
    id: z.string(),
    options: z.lazy(() => UpdateOptionsInputSchema().nullish())
  })
}

export function UpdateSubjectPKPInputSchema(): z.ZodObject<Properties<UpdateSubjectPKPInput>> {
  return z.object<Properties<UpdateSubjectPKPInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PartialSubjectPKPInputSchema()),
    id: z.string(),
    options: z.lazy(() => UpdateOptionsInputSchema().nullish())
  })
}

export function UpdateUserInputSchema(): z.ZodObject<Properties<UpdateUserInput>> {
  return z.object<Properties<UpdateUserInput>>({
    clientMutationId: z.string().nullish(),
    content: z.lazy(() => PartialUserInputSchema()),
    id: z.string(),
    options: z.lazy(() => UpdateOptionsInputSchema().nullish())
  })
}

export function UserImageMetadataInputSchema(): z.ZodObject<Properties<UserImageMetadataInput>> {
  return z.object<Properties<UserImageMetadataInput>>({
    height: z.number(),
    mimeType: z.string(),
    size: z.number().nullish(),
    src: z.string(),
    width: z.number()
  })
}

export function UserImageSourcesInputSchema(): z.ZodObject<Properties<UserImageSourcesInput>> {
  return z.object<Properties<UserImageSourcesInput>>({
    alternatives: z.array(z.lazy(() => UserImageMetadataInputSchema().nullable())).nullish(),
    original: z.lazy(() => UserImageMetadataInputSchema())
  })
}

export function UserInputSchema(): z.ZodObject<Properties<UserInput>> {
  return z.object<Properties<UserInput>>({
    description: z.string().nullish(),
    emoji: z.string().nullish(),
    hello: z.string().nullish(),
    image: z.lazy(() => UserImageSourcesInputSchema().nullish()),
    name: z.string(),
    url: z.string().nullish()
  })
}
