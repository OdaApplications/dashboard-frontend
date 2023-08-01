import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "redux/auth/authAPI";
import { selectToken, selectIsLogin } from "redux/auth/authSlice";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const token = useSelector(selectToken);
  const { isLoading: isRefreshing } = useCurrentUserQuery(null, {
    skip: !token,
  });
  const isLoggedIn = useSelector(selectIsLogin);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
