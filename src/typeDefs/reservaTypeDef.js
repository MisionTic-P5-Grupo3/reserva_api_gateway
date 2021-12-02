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
  input ReservaDetail{
    idReserva:	Int!
    tipoDocumento: String!
    numeroDocumento:	Int!
    nombreCompleto:	String!
    telefono:	Int!
    correoElectronico:	String!
    fecha:	String!
    idPlan: {
      id: Int!
      nombrePlan: String!
      precio: Int!
      descripcion: String!
      jornada: String!
    }
  }
  extend type Query {
    getReserva(idReserva: Int!): ReservaDetail
    getReservas: [ReservaDetail]
    getReservasForUser(user:Int!): [ReservaDetail]
   
  }
  type Mutation{
    createReserva(reserva:Reserva):ReservaDetail
    deleteReserva(idReserva: Int!):String!
  }
`;
module.exports = reservaTypes;