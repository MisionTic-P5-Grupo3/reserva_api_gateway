const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AvesAPI extends RESTDataSource {
  constructor() {
    super(); // Inicializa las variables de la clase heredada
    this.baseURL = serverConfig.aves_api_url;
  }

  async createAve(ave) {
    ave = new Object(JSON.parse(JSON.stringify(ave)));
    return await this.post("/createAve/", ave);
  }
  async allAves() {
    return await this.get("/aves");
  }
  async aveById(aveId) {
    return await this.get(`/ave/${aveId}`);
  }
  async aveByJornada(aveJornada) {
    return await this.get(`/avesByJornada/${aveJornada}`);
  }
  async updateAve(Ave,aveId) {
    const ave = new Object(Ave);
    return await this.put(`/updateAve/${aveId}/`, ave);
  }
  async deleteAve(aveId) {
    return await this.delete(`/ave/${aveId}`);
  }
}
module.exports = AvesAPI;
