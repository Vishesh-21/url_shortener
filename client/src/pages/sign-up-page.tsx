import { useState } from "react";
import AuthContainer from "../components/auth/auth-container";
import AuthFooter from "../components/auth/auth-footer";
import AuthHeader from "../components/auth/auth-header";
import AuthInput from "../components/auth/auth-input";
import { Button } from "../components/ui/button";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle sign up logic here
    console.log(formData);
    // reset form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
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

        <Button className="w-full h-12 text-lg rounded-none cursor-pointer">
          Sign Up
        </Button>
      </form>

      <AuthFooter text="Have an account?" linkText="Sign in" to="/sign-in" />
    </AuthContainer>
  );
}
