import { gql } from "apollo-server";

const authTypes = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  type CredentialsInput {
    username: String!
    password: String!
  }

  type SingUpInput {
    username: String!
    password: String!
    name: String!
    email: String!
  }

  type UserDetail {
    id: Int!
    username: String!
    password: String!
    name: String!
    email: String
  }

  type UserUpdate {
    id: Int!
    password: String!
    name: String!
    email: String
  }

  type Query {
    userDetailById(userId: Int!): UserDetail!
  }

  type Mutation {
    singUpUser(userInput: SingUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(token: String!): Access!
    updateUser(user: UserUpdate): UserDetail!
    deleteUser(userId: String!): String!
  }
`;
