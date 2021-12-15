const avesResolver = {
  Query: {
    getAveById: async (_, { aveId }, { dataSources }) => {
      return await dataSources.avesAPI.aveById(aveId);
    },
    getAves: async (_, {}, { dataSources }) => {
      return await dataSources.avesAPI.allAves();
    },
    getAvesByTipoAve: async (_, { tipoAve }, { dataSources }) => {
      return await dataSources.avesAPI.aveByJornada(tipoAve);
    },
  },
  Mutation: {
    createAve: async (_, { ave }, { dataSources }) => {
      return await dataSources.avesAPI.createAve(ave);
    },
    updateAve: async (_, { ave,aveId }, { dataSources }) => {
      return await dataSources.avesAPI.updateAve(ave,aveId);
    },
    deleteAve: async (_, { aveId }, { dataSources }) => {
      return await dataSources.avesAPI.deleteAve(aveId);
    },
  },
};
module.exports = avesResolver;
