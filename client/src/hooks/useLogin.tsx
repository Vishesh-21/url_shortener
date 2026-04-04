import { useState } from "react";
import { loginApi } from "../services/auth.api";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginApi(data);
      console.log("Login successful:", res);
      // Handle successful login (e.g., store token, redirect, etc.)

      return res;
    } catch (error: any) {
      setError(error?.response?.data?.message || "Login Failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
