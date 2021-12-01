const { gql } = require("apollo-server");

const reservatypes = gql`
  type Reserva  {}
  extend type Query {}
  extend type Mutation{
     
  }
 `;
module.exports = reservatypes;
