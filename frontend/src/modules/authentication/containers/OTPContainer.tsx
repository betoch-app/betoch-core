import { useLocation } from "react-router-dom";
import OTPConfirmationPage from "../pages/OTPConfirmationPage/OTPConfirmationPage";
import { useAppDispatch } from "../../core/hooks/redux-hooks";
import { OTPConfirmation } from "../slice/OTPSlice";
import { IOtp } from "../slice/model/IOtp";
import { useState } from "react";

const OTPContainer = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const { phone, OTPType } = state;
  const dispatch = useAppDispatch();

  const onOTPConfirmation = (values: any) => {
    setLoading(true);
    const formData: IOtp = {
      receiver_phone: phone,
      code: values.code,
    };
    dispatch(OTPConfirmation(formData));
  };
  return (
    <OTPConfirmationPage
      loading={loading}
      onOTPConfirmation={onOTPConfirmation}
      confirmationType={OTPType}
      urlState={state}
    />
  );
};

export default OTPContainer;
