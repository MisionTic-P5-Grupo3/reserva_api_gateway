//Call all typeDefs
const authTypes = require("./authTypeDef");
const avesTypes = require("./avesTypeDef");
const planTypes = require("./planTypeDef");
const reservaTypes = require("./ reservaTypeDef");

const schemaArrays = [authTypes, avesTypes, planTypes, reservaTypes];
module.exports = schemaArrays;
