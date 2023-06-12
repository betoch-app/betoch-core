import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoginContainer from "./modules/authentication/containers/LoginContainer";
import ForgotPassword from "./modules/authentication/components/ForgotPassword/ForgotPassword";
import NotFound from "./modules/core/views/components/NotFound/NotFound";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/** Anonymous route */}
        <Route key={"urlLogin"} element={<LoginContainer />} path={"/"}>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
