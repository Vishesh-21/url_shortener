import axios from "axios";
import { ENV } from "./env.config";

export const axiosClient = axios.create({
  baseURL: ENV.BACKEND_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    const status = error?.response?.status || 500;

    if (status === 401) {
      return Promise.reject({
        message: "Unauthorized. Please login again.",
        status,
      });
    }

    if (status === 500) {
      console.error("Server error");
    }

    return Promise.reject({
      message,
      status,
    });
  },
);
