import axios from "axios";
import { errorToast } from "@/utils";
const instance = axios.create();
instance.interceptors.request.use(
  async (config) => {
    config.baseURL = "https://otp-generator-production.up.railway.app";
    config.timeout = 1000;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    errorToast(error.response.data.message);
  }
);
export default instance;
