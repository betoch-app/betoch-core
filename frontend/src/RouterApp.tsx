import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoginContainer from "./modules/authentication/containers/LoginContainer";
import NotFound from "./modules/core/views/components/NotFound/NotFound";
import ForgotPasswordContainer from "./modules/authentication/containers/ForgotPasswordContainer";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/** Anonymous route */}
        <Route key={"urlLogin"} element={<LoginContainer />} path={"/"} />
        <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
