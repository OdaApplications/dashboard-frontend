import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "redux/auth/authSlice";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLogin);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
