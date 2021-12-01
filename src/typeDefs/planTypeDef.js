const { gql } = require("apollo-server");

const plantypes = gql`
  type Plan {}
  extend type Query {}
  extend type Mutation{
     
    }
 `;
module.exports = plantypes;
