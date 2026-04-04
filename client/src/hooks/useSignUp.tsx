import { useState } from "react";
import { signupApi } from "../services/auth.api";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await signupApi(data);
      return response;
    } catch (err: any) {
      setError(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
