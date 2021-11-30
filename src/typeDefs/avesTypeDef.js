const { gql } = require("apollo-server");

const avesTypes = gql`
  type Ave {
    nombreAve: String!
    nombreCientificoAve: String!
    tamano: Int!
    tipoAve: String!
  }
  input AvesUpdate {
    nombreAve: String!
    tamano: Int!
    tipoAve: String!
  }
  extend type Query {
    getAveById(aveId: String!): Ave!
    getAves: [Ave!]
    getAvesByTipoAve(tipoAve: String!): Ave!
  }
  type Mutation {
    createAve(ave: Ave!): String!
    updateAve(ave: AveUpdate): Ave!
    deleteAve(aveId: String!): String!
  }
`;
module.exports = avesTypes;
