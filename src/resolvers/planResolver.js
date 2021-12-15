const planResolver = {
  Query: {
    getPlan: async (_, { planId }, { dataSources }) => {
      return await dataSources.reservasAPI.detailPlan(planId);
    },
    getPlans: async (_, { Plan }, { dataSources }) => {
      return await dataSources.reservasAPI.AllPlansDetail(Plan);
    },
    getPlansForPrice: async (_, { precio }, { dataSources }) => {
      return await dataSources.reservasAPI.PlanForPrice(precio);
    },
    getPlansForJornada: async (_, { jornada }, { dataSources }) => {
      return await dataSources.reservasAPI.PlanForTimeDetail(jornada);
    },
  },
  Mutation: {
    updatePlan: async (_, { planId ,plan}, { dataSources }) => {
      return await dataSources.reservasAPI.updatePlan(planId,plan);
    },
    createPlan: async (_, { plan }, { dataSources }) => {
      return await dataSources.reservasAPI.createPlan(plan);
    },
    deletePlan: async (_, { planId }, { dataSources }) => {
      return await dataSources.reservasAPI.deletePlan(planId);
    },
  },
};
module.exports = planResolver;
