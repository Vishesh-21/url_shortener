import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <h2>Auth Pages</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
