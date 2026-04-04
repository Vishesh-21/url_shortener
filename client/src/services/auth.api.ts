import { axiosClient } from "../config/api.config";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginApi = async (data: LoginPayload) => {
  try {
    const res = await axiosClient.post("/auth/login", data);
    console.log("Login response:", res.data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to login");
  }
};
