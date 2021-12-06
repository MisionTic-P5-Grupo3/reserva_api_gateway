const authResolvers = require("./authResolver");
const avesResolvers = require("./avesResolver");
const planResolvers = require("./planResolver");
const reservaResolvers = require("./reservaResolver");
const lodash = require("lodash");

const resolvers = lodash.merge(
  authResolvers,
  avesResolvers,
  planResolvers,
  reservaResolvers
);
module.exports = resolvers;
