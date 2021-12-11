const reservasResolver = {
  Query: {
    getReserva: async (_, { idReserva }, { dataSources }) => {
      return await dataSources.reservasAPI.detailReserva(idReserva);
    },
    getReservas: async (_, {}, { dataSources }) => {
      return await dataSources.reservasAPI.AllDetailReservas();
    },
    getReservasForUser: async (_, { user }, { dataSources }) => {
      return await dataSources.reservasAPI.AllDetailReservasForUser(user);
    },
  },
  Mutation: {
    createReserva: async (_, { reserva }, { dataSources }) => {
      return await dataSources.reservasAPI.createReserva(reserva);
    },
    deleteReserva: async (_, { idReserva }, { dataSources }) => {
      return await dataSources.reservasAPI.deleteReserva(idReserva);
    },
    ReservaUpdate: async (_, { idReserva,Reserva }, { dataSources }) => {
      return await dataSources.reservasAPI.updateReserva(idReserva,Reserva);
    },
  },
};
module.exports = reservasResolver;
