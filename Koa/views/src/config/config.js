import axios from "axios";
export const query = axios.create({
  baseURL: "http://127.0.0.1:3012/api/",
  headers: {}
});
