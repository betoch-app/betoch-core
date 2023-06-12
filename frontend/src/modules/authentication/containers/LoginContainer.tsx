import { useState } from "react";
import LoginPage from "../pages/LoginPage/LoginPage";

export const LoginContainer = () => {
  const [loading, setLoading] = useState(false);

  const onLogin = (values: any) => {
    setLoading(true);
    console.log(values);
  };
  return <LoginPage onLogin={onLogin} loading={loading} />;
};

export default LoginContainer;
