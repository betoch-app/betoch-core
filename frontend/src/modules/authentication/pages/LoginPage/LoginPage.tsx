import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import GenericSpinner from "../../../core/views/components/GenericSwipper/GenericSpinner";
import LanguageSwitcher from "../../../core/views/components/LanguageSwitcher/LanguageSwitcher";
import Login from "../../components/Login/Login";
import LoginSideBar from "../../components/LoginSideBar/LoginSideBar";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-row items-stretch">
      <div className="w-2/5">
        <LoginSideBar />
      </div>
      <div className="flex flex-col w-3/5 p-2">
        <div className="flex flex-row w-full justify-end items-center">
          <LanguageSwitcher />
        </div>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default LoginPage;
