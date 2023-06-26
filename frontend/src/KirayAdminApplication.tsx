import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/kirayAdminApp/components/Dashboard/Dashboard";
import Home from "./modules/kirayAdminApp/components/Home/Home";
import NotFound from "./modules/core/views/components/NotFound/NotFound";
import Settings from "./modules/kirayAdminApp/Settings/Settings";

export const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route key={"urlKirayAdminDashboard"} element={<Dashboard />} path="/">
          <Route key={"urlKirayAdminHome"} element={<Home />} index />
          <Route key={"urlSettings"} element={<Settings />} path="/settings" />
        </Route>
        <Route key={"urlNotFound"} element={<NotFound />} path="*" />
      </Routes>
    </Suspense>
  );
};

export default Router;
