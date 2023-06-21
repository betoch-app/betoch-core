import { useLocation } from "react-router-dom";
import OTPConfirmationPage from "../pages/OTPConfirmationPage/OTPConfirmationPage";
import { useAppDispatch } from "../../core/hooks/redux-hooks";
import { OTPConfirmation } from "../slice/OTPSlice";
import { IOtp } from "../slice/model/IOtp";

const OTPContainer = () => {
  const { state } = useLocation();
  const { phone } = state;
  const dispatch = useAppDispatch();
  const onOTPConfirmation = (values: any) => {
    const formData: IOtp = {
      receiver_phone: phone,
      code: values.code,
    };
    dispatch(OTPConfirmation(formData));
  };
  return <OTPConfirmationPage onOTPConfirmation={onOTPConfirmation} />;
};

export default OTPContainer;
