import { Outlet } from "react-router";
import { Container } from "../components/container";

const AuthLayout = () => {
  return (
    <Container className="md:py-0">
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
