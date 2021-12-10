const { gql } = require("apollo-server");
const reservaTypes = gql`
  type Reserva {
    id_reserva: Int!
    tipo_documento: String!
    numero_documento: Int!
    nombre_completo: String!
    telefono: String!
    correo_electronico: String!
    fecha: String!
    id_plan: Int!
  }
  input ReservaInput {
    tipo_documento: String!
    numero_documento: Int!
    nombre_completo: String!
    telefono: String!
    correo_electronico: String!
    fecha: String
    id_plan: Int!
  }
  input ReservaUpdate {
    id_reserva: Int
    tipo_documento: String!
    numero_documento: Int!
    nombre_completo: String!
    telefono: String!
    correo_electronico: String!
    fecha: String
    id_plan: Int!
  }
  type ReservaDetail {
    id_reserva: Int
    tipo_documento: String!
    numero_documento: Int!
    nombre_completo: String!
    telefono: String!
    correo_electronico: String!
    fecha: String
    id_plan: PlanDetail
  }

  type Query {
    getReserva(idReserva: Int!): ReservaDetail
    getReservas: [ReservaDetail]
    getReservasForUser(user: Int!): [ReservaDetail]
  }
  type Mutation {
    createReserva(reserva: ReservaInput): Reserva
    deleteReserva(idReserva: Int!): String!
    ReservaUpdate(reserva: ReservaUpdate): ReservaDetail
  }
`;
module.exports = reservaTypes;
