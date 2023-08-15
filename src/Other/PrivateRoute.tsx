import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: { isAuth: boolean }) => {
  return props.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
