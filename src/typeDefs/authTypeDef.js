const { gql } = require("apollo-server");

const authTypes = gql`
  input Tokens {
    refresh: String!
    access: String!
  }

  input Access {
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

  input UserDetail {
    id: Int!
    username: String!
    password: String!
    name: String!
    email: String
  }

  input UserUpdate {
    id: Int!
    password: String!
    name: String!
    email: String
  }

  extend type Query {
    userDetailById(userId: Int!): UserDetail!
  }

  extend type Mutation {
    singUpUser(userInput: SingUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(token: Refresh): Access!
    updateUser(user: UserUpdate): UserDetail!
    deleteUser(userId: String!): String!
  }
`;
module.exports = authTypes;
