import { axiosClient } from "../config/api.config";

export const shortenUrlApi = async (url: string) => {
  try {
    const res = await axiosClient.post("/urls/", { url });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to shorten URL");
  }
};
