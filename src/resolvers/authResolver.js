const userResolver = {
  Query: {
    userDetailById: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.authAPI.getUser(userId);
      //Conectar al servicion web
      else return null;
    },
  },
  Mutation: {
    singUpUser: async (_, { userInput }, { dataSources }) => {
      return await dataSources.authAPI.createUser(userInput);
    },
    logIn: async (_, { credentials }, { dataSources }) => {
      return await dataSources.authAPI.authRequest(credentials);
    },
    refreshToken: async (_, { token }, { dataSources }) =>
      dataSources.authAPI.refreshToken(token),
    updateUser: async (_, { user }, { dataSources, userIdToken }) => {
      if (user.id == userIdToken)
        return await dataSources.authAPI.updateUser(user);
      else return null;
    },
    deleteUser: async (_, { userId }, { dataSources, userIdToken }) => {
      if (user.id == userIdToken)
        return await dataSources.authAPI.deleteUser(userId);
      else return null;
    },
  },
};
module.exports = userResolver;
