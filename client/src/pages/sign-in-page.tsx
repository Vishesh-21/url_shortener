import { useState } from "react";
import AuthContainer from "../components/auth/auth-container";
import AuthFooter from "../components/auth/auth-footer";
import AuthHeader from "../components/auth/auth-header";
import AuthInput from "../components/auth/auth-input";
import { Button } from "../components/ui/button";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle sign in logic here
    console.log(formData);
    // reset form
    setFormData({
      email: "",
      password: "",
    });
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

        <Button className="w-full h-12 rounded-none text-lg cursor-pointer">
          Login
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
