const { gql } = require("apollo-server");

const planTypes = gql`
  type Plan {
    id_plan: Int!
    nombre_plan: String!
    precio: Int!
    descripcion: String
    jornada: String
  }
  type PlanDetail {
    id_plan: Int!
    nombre_plan: String!
    precio: Int!
    descripcion: String
    jornada: String
  }
  input PlanUpdate {
    nombre_plan: String!
    precio: Int!
    descripcion: String!
    jornada: String!
  }

  type Query {
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
