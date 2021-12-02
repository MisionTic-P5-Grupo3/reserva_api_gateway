const avesResolver = {
  Query: {
    getAveById: async (_, {aveId}, {dataSources}) =>{
      return await dataSources.avesAPI.aveById(aveId);
    },
    getAvesByTipoAve: async (_, {tipoAve}, {dataSources}) =>{
      return await dataSources.avesAPI.aveByJornada(tipoAve);
    },
  },
  Mutation: {
    createAve: async (_,{ave},{dataSources, userIdToken}) =>{
      return await dataSources.avesAPI.createAve(ave);
    },
    updateAve: async (_,{ave},{dataSources, userIdToken}) =>{
      return await dataSources.avesAPI.updateAve(ave);
    },
    deleteAve: async (_,{aveId},{dataSources, userIdToken}) =>{
      return await dataSources.avesAPI.deleteAve(aveId);
    },
  },
};
module.exports = avesResolver;
