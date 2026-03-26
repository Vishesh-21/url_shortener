import { axiosClient } from "../config/api.config";

export const shortenUrlApi = async (url: string) => {
  const res = await axiosClient.post("/shorten", { url });
  
  return res.data; 
};