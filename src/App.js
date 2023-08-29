import { Routes, Route, Navigate } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import PageLayoute from "./components/MainLayout/Metrica/PageLayout/PageLayoute";
import NotFound from "./pages/NotFound";
import Auth from "pages/Auth";
import CabinetPage from "pages/CabinetPage";

import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "redux/API/authApi";
import { selectToken } from "redux/auth/authSlice";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

function App() {
  const token = useSelector(selectToken);
  useCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route
        path="/cabinet/login"
        element={
          <RestrictedRoute
            component={<Auth />}
            redirectTo={"/analytics/home/all"}
          />
        }
      />
      <Route path="/" element={<SharedLayout person={"public"} />}>
        <Route index element={<Navigate to={"/analytics/home/all"} />} />

        <Route
          path="/analytics"
          element={<Navigate to={"/analytics/home/all"} />}
        />

        <Route
          path="/analytics/:page"
          element={<PageLayoute chartsAcess={"public"} />}
        >
          <Route
            path="/analytics/:page/:sub"
            element={<PageLayoute chartsAcess={"public"} />}
          >
            <Route
              path="/analytics/:page/:sub/:group"
              element={<PageLayoute chartsAcess={"public"} />}
            />
          </Route>
        </Route>

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route
        path="/cabinet"
        element={
          <PrivateRoute
            component={<SharedLayout person={"cabinet"} />}
            redirectTo="/cabinet/login"
          />
        }
      >
        <Route
          index
          element={<Navigate to={"/cabinet/analytics/home/all"} />}
        />

        <Route
          path="/cabinet/analytics/:page"
          element={<PageLayoute chartsAcess={"all"} cabinet />}
        >
          <Route
            path="/cabinet/analytics/:page/:sub"
            element={<PageLayoute chartsAcess={"all"} cabinet />}
          >
            <Route
              path="/cabinet/analytics/:page/:sub/:group"
              element={<PageLayoute chartsAcess={"all"} cabinet />}
            />
          </Route>
        </Route>

        <Route
          path="/cabinet/profile/:page"
          element={
            <PrivateRoute component={<CabinetPage />} redirectTo="/login" />
          }
        >
          <Route
            path="/cabinet/profile/:page/:sub"
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
