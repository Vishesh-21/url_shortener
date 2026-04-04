import { axiosClient } from "../config/api.config";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export const loginApi = async (data: LoginPayload) => {
  try {
    const res = await axiosClient.post("/auth/login", data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to login");
  }
};

export const signupApi = async (data: SignupPayload) => {
  try {
    const res = await axiosClient.post("/auth/register", data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to signup");
  }
};
