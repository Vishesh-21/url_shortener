import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/sign-in-page";
import { SignUpPage } from "../pages/sign-up-page";
import { NotFoundPage } from "../pages/not-found";
import AuthLayout from "../layouts/auth-layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Layout (Login + Register) */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>

      {/* Public Home */}
      <Route path="/" element={<HomePage />} />

      {/* Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
