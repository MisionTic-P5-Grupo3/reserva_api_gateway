const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const authentication = require("./utils/authentication");
const AuthAPI = require("./");
const AvesAPI = require("./");
const ReservasAPI = require("./utils");

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI(),
    avesAPI: new AvesAPI(),
    reservasAPI: new ReservasAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
