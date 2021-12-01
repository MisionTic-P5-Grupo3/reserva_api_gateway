const { gql } = require("apollo-server");

const avestypes = gql`
  type Aves  {}
  extend type Query {}
  extend type Mutation{
     
  }
 `;
module.exports = avestypes;
