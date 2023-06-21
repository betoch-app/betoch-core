import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoginContainer from "./modules/authentication/containers/LoginContainer";
import NotFound from "./modules/core/views/components/NotFound/NotFound";
import ForgotPasswordContainer from "./modules/authentication/containers/ForgotPasswordContainer";
import SignUpContainer from "./modules/authentication/containers/SignUpContainer";
import OTPContainer from "./modules/authentication/containers/OTPContainer";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/** Anonymous route */}
        <Route key={"urlLogin"} element={<LoginContainer />} path={"/"} />
        <Route
          key={"urlForgotPassword"}
          path="/forgot-password"
          element={<ForgotPasswordContainer />}
        />
        <Route key={"urlSignup"} path="/signUp" element={<SignUpContainer />} />
        <Route
          key={"urlAccountConfirmation"}
          path="/accountConfirmation"
          element={<OTPContainer />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
