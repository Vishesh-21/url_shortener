const requiredEnv = (key: string, value?: string) => {
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value;
};



export const ENV = {
  BACKEND_API_URL: requiredEnv("BACKEND_API_URL", import.meta.env.VITE_BACKEND_API_URL)
};