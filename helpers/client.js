import axios from "axios";

class Client {
  constructor() {
    this.host = "http://localhost:3000";
  }

  submitActions(actions) {
    this.post("/my_updates", { actions });
  }

  post(path, data) {
                                                // TODO: authorization
    axios.post(`${this.host}${path}`, {...data, name: "Test", role: "Test"});
  }
}

export default Client;
