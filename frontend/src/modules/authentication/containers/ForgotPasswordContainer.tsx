import { useEffect, useState } from "react";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import { IOtp } from "../slice/model/IOtp";
import { clearInitialState, sendOTPCOde } from "../slice/OTPSlice";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { OTPType } from "../components/OTP/OTPType";

const ForgotPasswordContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<IOtp>({
    receiver_phone: "",
  });
  const { success, message, error } = useAppSelector((state) => state.OTPSlice);
  const navigate = useNavigate();

  const onAccountRecovery = (values: any) => {
    setLoading(true);
    setFormData({
      receiver_phone: values.phone,
    });
    dispatch(
      sendOTPCOde({
        receiver_phone: values.phone,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate("/accountConfirmation", {
        state: {
          phone: formData.receiver_phone,
          OTPType: OTPType.AccountReset,
        },
      });
    }

    return () => {
      dispatch(clearInitialState());
    };
  }, [success]);
  return (
    <ForgotPasswordPage
      onAccountRecovery={onAccountRecovery}
      loading={error ? false : loading}
      error={error}
      errorMessage={message}
    />
  );
};

export default ForgotPasswordContainer;
