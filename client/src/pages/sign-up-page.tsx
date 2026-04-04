import { useState } from "react";
import AuthContainer from "../components/auth/auth-container";
import AuthFooter from "../components/auth/auth-footer";
import AuthHeader from "../components/auth/auth-header";
import AuthInput from "../components/auth/auth-input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { useSignUp } from "../hooks/useSignUp";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, loading, error } = useSignUp();
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);

      //reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/sign-in");
    } catch (error) {}
  };

  return (
    <AuthContainer>
      <AuthHeader title="Create an account" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          id="name"
          label="Name"
          placeholder="e.g. Howard"
          value={formData.name}
          onChange={handleChange}
        />

        <AuthInput
          id="email"
          label="Email"
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          disabled={loading}
          className="w-full h-12 text-lg rounded-none cursor-pointer"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>

      <AuthFooter text="Have an account?" linkText="Sign in" to="/sign-in" />
    </AuthContainer>
  );
}
