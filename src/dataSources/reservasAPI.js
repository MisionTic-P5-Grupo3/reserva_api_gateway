const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class ReservasAPI extends RESTDataSource {
  constructor() {
    super(); // Inicializa las variables de la clase heredada
    this.baseURL = serverConfig.reservas_api_url;
  }

  async createReserva(reserva) {
    reserva = new Object(JSON.parse(JSON.stringify(reserva)));
    return await this.post("/reserva_usuario/", reserva);
  }
  async AllDetailReservasForUser(User) {
    return await this.get(`/reservas_usuario/${User}/`);
  }
  async AllDetailReservas() {
    return await this.get("/reservas/");
  }
  async detailReserva(idReserva) {
    return await this.get(`/reserva_usuario/${idReserva}/`);
  }
  async updateReserva(idReserva,Reserva) {
    const reserva = new Object(Reserva);
    console.log(Reserva)
    return await this.put(`/reserva_usuario/update/${idReserva}/`, reserva);
  }
  async deleteReserva(idReserva) {
    return await this.delete(`/transaction/remove/${idReserva}/`);
  }
  async detailPlan(planId) {
    return await this.get(`/plan_usuario/${planId}/`);
  }
  async AllPlansDetail(Plan) {
    return await this.get(`/plans/`, Plan);
  }
  async PlanForPrice(precio) {
    return await this.get(`/plans_for_price/${precio}/`);
  }
  async PlanForTimeDetail(jornada) {
    return await this.get(`/plans_for_time/${jornada}/`);
  }
  async updatePlan(idPlan,Plan) {
    const plan = new Object(Plan);
    return await this.put(`/plan_usuario/update/${idPlan}/`, plan);
  }
  async createPlan(Plan) {
    Plan = new Object(Plan);
    return await this.post(`/plan_usuario/`, Plan);
  }
  async deletePlan(idplan) {
    return await this.delete(`/plan_usuario/remove/${idplan}/`);
  }
}

module.exports = ReservasAPI;
