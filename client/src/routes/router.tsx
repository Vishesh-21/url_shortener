import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home-page";
import SignInPage from "../pages/sign-in-page";
import { NotFoundPage } from "../pages/not-found";
import AuthLayout from "../layouts/auth-layout";
import SignUpPage from "./../pages/sign-up-page";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Layout (Login + Register) */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
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
