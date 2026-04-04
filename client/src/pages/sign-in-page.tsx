import { useState } from "react";
import AuthContainer from "../components/auth/auth-container";
import AuthFooter from "../components/auth/auth-footer";
import AuthHeader from "../components/auth/auth-header";
import AuthInput from "../components/auth/auth-input";
import { Button } from "../components/ui/button";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);

      //reset form
      setFormData({
        email: "",
        password: "",
      });

      //navigate to dashboard
      navigate("/");
    } catch (err) {
      // Error is already handled in the useLogin hook, so no need to do anything here
      console.log("Login failed:", err);
    }
  };

  return (
    <AuthContainer>
      <AuthHeader
        title="Welcome back"
        subtitle="Please enter your details to sign in."
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          id="email"
          label="Email address"
          type="email"
          placeholder="e.g. howard@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        <AuthInput
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          disabled={loading}
          className="w-full h-12 rounded-none text-lg cursor-pointer"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up for free"
        to="/sign-up"
      />
    </AuthContainer>
  );
}
