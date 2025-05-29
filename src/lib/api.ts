import { message } from "antd";
import { extend } from "umi-request";

const api = extend({
  prefix: "http://localhost:8000/v1",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  errorHandler: (error) => {
    message.error(error.message);
    throw error;
  },
});

api.interceptors.response.use((response) => {
  if (response.status === 401) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_user");
  }
  return response;
});

export { api };
