const { gql } = require("apollo-server");

const authTypes = gql`
  type Tokens {
    refresh: String!
    access: String!
  }
  type Access {
    access: String!
  }
  input Refresh {
    refresh: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  input SingUpInput {
    username: String!
    password: String!
    name: String!
    email: String!
  }

  type UserDetail {
    id: Int!
    username: String!
    name: String!
    email: String
  }

  input UserUpdate {
    id: Int!
    username: String!
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
    refreshToken(token: Refresh): Access!
    updateUser(user: UserUpdate): UserDetail!
    deleteUser(userId: String!): String!
  }
`;

module.exports = authTypes;
