import { RESTDataSource } from "apollo-datasource-rest";
const serverConfig = require("../server ");

class ReservasAPI extends RESTDataSource {
  constructor() {
    super(); // Inicializa las variables de la clase heredada
    this.baseURL = serverConfig.reservas_api_url;
  }
}

module.exports = ReservasAPI;
