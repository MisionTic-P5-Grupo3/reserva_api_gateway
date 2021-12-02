const { gql } = require("apollo-server");

const planTypes = gql`
  type Plan {
    id: Int!
    nombrePlan: String!
    precio: Int!
    descripcion: String!
    jornada: String!
  }
  input PlanUpdate {
    nombrePlan: String!
    precio: Int!
    descripcion: String!
    jornada: String!
  }

  extend type Query {
    getPlan(planId: Int!): Plan
    getPlans: [Plan!]
    getPlansForPrice(precio: Int!): [Plan]
    getPlansForJornada(jornada: String!): [Plan]
  }
  type Mutation {
    updatePlan(plan: PlanUpdate): Plan
    deletePlan(planId: Int!): String!
  }
`;
module.exports = planTypes;


