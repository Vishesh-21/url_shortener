import axios from "axios";
import { toast } from "sonner";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
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
      console.error("Unauthorized - maybe redirect to login");
    }

    if (status === 500) {
      console.error("Server error");
    }

    toast.error(message);

    return Promise.reject({
      message,
      status,
    });
  },
);
