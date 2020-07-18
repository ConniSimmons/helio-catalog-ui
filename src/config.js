import axios from "axios";

/*
export default axios.create({
  baseURL: "https://helio-catalog-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
*/

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

