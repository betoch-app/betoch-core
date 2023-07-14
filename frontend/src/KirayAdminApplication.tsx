import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/kirayAdminApp/components/Dashboard/Dashboard";
import NotFound from "./modules/core/views/components/NotFound/NotFound";
import Settings from "./modules/kirayAdminApp/Settings/Settings";
import CompanyRegistrationContainer from "./modules/kirayAdminApp/containers/CompanyRegistrationContainer";
import HomeContainer from "./modules/kirayAdminApp/containers/HomeContainer";

export const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route key={"urlKirayAdminDashboard"} element={<Dashboard />} path="/">
          <Route key={"urlKirayAdminHome"} element={<HomeContainer />} index />
          <Route
            key={"urlCompany"}
            element={<CompanyRegistrationContainer />}
            path="/company/register"
          />
          <Route key={"urlSettings"} element={<Settings />} path="/settings" />
        </Route>
        <Route key={"urlNotFound"} element={<NotFound />} path="*" />
      </Routes>
    </Suspense>
  );
};

export default Router;
