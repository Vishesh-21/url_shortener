import { Outlet } from "react-router";
import { Container } from "../components/container";
import HomeIconButton from "../components/auth/home-redirect";

const AuthLayout = () => {
  return (
    <Container className="md:py-0">
      <Outlet />
      <HomeIconButton />
    </Container>
  );
};

export default AuthLayout;
