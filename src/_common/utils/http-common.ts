import axios from "axios";
import { PUBLIC_API_URL } from "../constants";

const defaultOptions = {
  baseURL: `${PUBLIC_API_URL}/api`,
};
const instance = axios.create(defaultOptions);

export default instance;
