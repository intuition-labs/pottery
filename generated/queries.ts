
  import { gql } from 'graphql-tag'

  

    export const CreateUserDocument = gql`
      mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          document {
            id
          }
        }
      }
    `

    export const UpdateUserDocument = gql`
      mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          document {
            id
          }
        }
      }
    `

    

    export const CreateSubjectPKPDocument = gql`
      mutation CreateSubjectPKP($input: CreateSubjectPKPInput!) {
        createSubjectPKP(input: $input) {
          document {
            id
          }
        }
      }
    `

    export const UpdateSubjectPKPDocument = gql`
      mutation UpdateSubjectPKP($input: UpdateSubjectPKPInput!) {
        updateSubjectPKP(input: $input) {
          document {
            id
          }
        }
      }
    `

    

    export const CreateEntryDocument = gql`
      mutation CreateEntry($input: CreateEntryInput!) {
        createEntry(input: $input) {
          document {
            id
          }
        }
      }
    `

    export const UpdateEntryDocument = gql`
      mutation UpdateEntry($input: UpdateEntryInput!) {
        updateEntry(input: $input) {
          document {
            id
          }
        }
      }
    `

    

    export const CreateListDocument = gql`
      mutation CreateList($input: CreateListInput!) {
        createList(input: $input) {
          document {
            id
          }
        }
      }
    `

    export const UpdateListDocument = gql`
      mutation UpdateList($input: UpdateListInput!) {
        updateList(input: $input) {
          document {
            id
          }
        }
      }
    `

    

    export const CreatePermissionedListDocument = gql`
      mutation CreatePermissionedList($input: CreatePermissionedListInput!) {
        createPermissionedList(input: $input) {
          document {
            id
          }
        }
      }
    `

    export const UpdatePermissionedListDocument = gql`
      mutation UpdatePermissionedList($input: UpdatePermissionedListInput!) {
        updatePermissionedList(input: $input) {
          document {
            id
          }
        }
      }
    `

    