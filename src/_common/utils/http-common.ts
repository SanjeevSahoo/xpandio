import axios from "axios";

const defaultOptions = {
  baseURL: "/api",
};
const instance = axios.create(defaultOptions);

export default instance;
