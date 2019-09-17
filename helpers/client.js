import axios from "axios";

class Client {
  constructor() {
    this.host = "http://localhost:3000";
  }

  submitResponses(responses) {
    this.post("/responses/batch", { responses });
  }

  post(path, data, response, error) {
                                                // TODO: authorization
    axios.post(`${this.host}${path}`, {...data, name: "Azizi", role: "farmer"});
  }
}

export default Client;
