import { useEffect, useState } from "react";
import { IResetPassword } from "../models/ResetPassword";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import {
  clearAuthenticationInitialState,
  resetPassword,
} from "../slice/authenticationSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { storeToken } from "../../core/services/token.service";
import { changeApplication } from "../../core/slices/applicationsSlice";

const ResetPasswordContainer = () => {
  const { state } = useLocation();
  const { phone } = state;
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { success, error, message, data } = useAppSelector(
    (state) => state.authenticationSlice
  );
  const { access_token, refresh_token, role } = data;

  const onReset = (values: IResetPassword) => {
    setLoading(true);
    const formData: IResetPassword = {
      password: values.password,
      phone: phone,
    };
    dispatch(resetPassword(formData));
  };

  useEffect(() => {
    if (success) {
      storeToken(access_token, refresh_token, role.toString());
      dispatch(changeApplication(role.toString()));
      navigate("/");
    }

    return () => {
      dispatch(clearAuthenticationInitialState());
    };
  }, [success]);
  return (
    <ResetPasswordPage
      onReset={onReset}
      loading={loading}
      error={error}
      message={message}
    />
  );
};

export default ResetPasswordContainer;
