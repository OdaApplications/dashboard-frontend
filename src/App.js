import { Routes, Route, Navigate } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import PageLayoute from "./components/MainLayout/PageLayout/PageLayoute";
import NotFound from "./pages/NotFound";
import Auth from "pages/Auth";
import CabinetPage from "pages/CabinetPage";

import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "redux/auth/authAPI";
import { selectToken } from "redux/auth/authSlice";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

function App() {
  const token = useSelector(selectToken);
  useCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <RestrictedRoute
            component={<Auth />}
            redirectTo={"/metrica/home/all"}
          />
        }
      />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to={"/metrica/home/all"} />} />

        <Route path="/metrica/:page" element={<PageLayoute />}>
          <Route path="/metrica/:page/:sub" element={<PageLayoute />}>
            <Route
              path="/metrica/:page/:sub/:group"
              element={<PageLayoute />}
            />
          </Route>
        </Route>

        <Route
          path="/cabinet/:page"
          element={
            <PrivateRoute component={<CabinetPage />} redirectTo="/login" />
          }
        >
          <Route
            path="/cabinet/:page/:sub"
            element={
              <PrivateRoute component={<CabinetPage />} redirectTo="/login" />
            }
          />
        </Route>

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
