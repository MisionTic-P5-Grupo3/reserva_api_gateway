const { gql } = require("apollo-server");

const reservaTypes = gql`
  type Reserva  {
    idReserva:	Int!
    tipoDocumento: String!
    numeroDocumento:	Int!
    nombreCompleto:	String!
    telefono:	Int!
    correoElectronico:	String!
    fecha:	String!
    idPlan: Int!
  }
  input ReservaInput  {
    idReserva:	Int!
    tipoDocumento: String!
    numeroDocumento:	Int!
    nombreCompleto:	String!
    telefono:	Int!
    correoElectronico:	String!
    fecha:	String!
    idPlan: Int!
  }
  input ReservaUpdate  {
    tipoDocumento: String!
    numeroDocumento:	Int!
    nombreCompleto:	String!
    telefono:	Int!
    correoElectronico:	String!
    fecha:	String!
    idPlan: Int!
  }
 
  type Query {
    getReserva(idReserva: Int!): Reserva
    getReservas: [Reserva]
    getReservasForUser(user:Int!):[Reserva]
  }
  type Mutation{
    createReserva(reserva:ReservaInput):Reserva
    deleteReserva(idReserva: Int!):String!
    ReservaUpdate(reserva:ReservaUpdate):Reserva
  }
`;
module.exports = reservaTypes;
