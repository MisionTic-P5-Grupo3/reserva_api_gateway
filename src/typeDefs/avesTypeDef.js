const { gql } = require("apollo-server");

const avesTypes = gql`
  type Ave {
    nombreAve: String!
    nombreCientificoAve: String!
    tamano: Int
    tipoAve: String!
  }
  input AveInput {
    nombreAve: String
    nombreCientificoAve: String
    tamano: Int
    tipoAve: String
    url: String
  }
  input AveUpdate {
    nombreAve: String!
    tamano: Int!
    tipoAve: String!
  }
  type Query {
    getAveById(aveId: String!): Ave!
    getAves: [Ave!]
    getAvesByTipoAve(tipoAve: String!): [Ave!]
  }
  type Mutation {
    createAve(ave: AveInput!): Ave!
    updateAve(ave: AveUpdate): Ave!
    deleteAve(aveId: String!): String!
  }
`;
module.exports = avesTypes;
