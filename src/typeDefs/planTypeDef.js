const { gql } = require("apollo-server");

const planTypes = gql`
  type Plan {
    id_plan: Int!
    nombre_plan: String!
    precio: Int!
    descripcion: String
    jornada: String
    url: String
  }
  input PlanInput {
    nombre_plan: String!
    precio: Int!
    descripcion: String
    jornada: String
    url: String
  }
  type PlanDetail {
    id_plan: Int!
    nombre_plan: String!
    precio: Int!
    descripcion: String
    jornada: String
    url: String
  }
  input PlanUpdate {
    nombre_plan: String!
    precio: Int!
    descripcion: String!
    jornada: String!
    url: String
  }

  type Query {
    getPlan(planId: Int!): Plan
    getPlans: [Plan!]
    getPlansForPrice(precio: Int!): [Plan]
    getPlansForJornada(jornada: String!): [Plan]
  }
  type Mutation {
    createPlan(plan: PlanInput): PlanDetail
    updatePlan(plan: PlanUpdate,planId: Int!): PlanDetail
    deletePlan(planId: Int!): String!
  }
`;
module.exports = planTypes;
