import { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import { ILogin } from "../slice/model/Login";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import { login } from "../slice/authenticationSlice";
import { changeApplication } from "../../core/slices/applicationsSlice";
import { storeToken } from "../../core/services/token.service";

export const LoginContainer = () => {
  const [loading, setLoading] = useState(false);
  const { success, message, error, data } = useAppSelector(
    (state) => state.authenticationSlice
  );
  const dispatch = useAppDispatch();
  const onLogin = (values: ILogin) => {
    setLoading(true);
    dispatch(login(values));
  };

  useEffect(() => {
    if (success) {
      dispatch(changeApplication(data.role.toString()));
      storeToken(data.access_token, data.refresh_token, data.role.toString());
    }
  }, [success]);

  return (
    <LoginPage
      onLogin={onLogin}
      loading={error ? false : loading}
      message={message}
    />
  );
};

export default LoginContainer;
