const reservasResolver = {

  Query: {
    getReserva: async (_, {idReserva}, {dataSources}) =>{
      return await dataSources.reservasAPI.detailReserva(idReserva);
    },
    getReservaForUser: async (_, {user}, {dataSources}) =>{
      return await dataSources.reservasAPI.AllDetailReserva(user);
    },
  },
  Mutation: {
    createReserva:async (_,{reserva},{dataSources}) =>{
      return await dataSources.reservasAPI.createReserva(reserva);
    },
    deleteReserva:async (_,{idReserva},{dataSources}) =>{
      return await dataSources.reservasAPI.deleteReserva(idReserva);
    },
    ReservaUpdate:async (_,{idReserva},{dataSources}) =>{
      return await dataSources.reservasAPI.updateReserva(idReserva);
    }

  },
};
module.exports = reservasResolver;

