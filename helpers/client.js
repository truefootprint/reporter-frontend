import axios from "axios";

class Client {
  constructor() {
    this.host = "http://localhost:3000";
    this.name = "Tefo";
    this.role = "monitor";
  }

  getMyData() {
    return this.get("/my_data");
  }

  submitActions(actions) {
    return this.post("/my_updates", { actions });
  }

  get(path) {
    return axios.get(`${this.host}${path}?name=${this.name}&role=${this.role}`);
  }

  post(path, data) {
    return axios.post(`${this.host}${path}`, {...data, name: this.name, role: this.role});
  }
}

export default Client;
