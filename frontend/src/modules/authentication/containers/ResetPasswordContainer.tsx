import { useEffect, useState } from "react";
import { IResetPassword } from "../models/ResetPassword";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import {
  clearAuthenticationInitialState,
  resetPassword,
} from "../slice/authenticationSlice";
import { useLocation } from "react-router-dom";

const ResetPasswordContainer = () => {
  const { state } = useLocation();
  const { phone } = state;
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { success, error, message } = useAppSelector(
    (state) => state.authenticationSlice
  );
  const onReset = (values: IResetPassword) => {
    const formData: IResetPassword = {
      password: values.password,
      phone: phone,
    };
    dispatch(resetPassword(formData));
  };

  useEffect(() => {
    if (success) {
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
