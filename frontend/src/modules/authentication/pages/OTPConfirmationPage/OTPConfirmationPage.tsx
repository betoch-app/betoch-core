import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import OTPConfirmation from "../../components/OTP/OTPConfirmation";
import { clearInitialState } from "../../slice/OTPSlice";
import { useNavigate } from "react-router-dom";
import { OTPType } from "../../components/OTP/OTPType";
type Props = {
  onOTPConfirmation: (values: any) => void;
  loading: boolean;
  confirmationType: OTPType;
  urlState: {};
};
const OTPConfirmationPage = ({
  onOTPConfirmation,
  loading,
  confirmationType,
  urlState,
}: Props) => {
  const { success, message, error, data } = useAppSelector(
    (state) => state.OTPSlice
  );
  const navigate = useNavigate();

  const navigateToNextStep = () => {
    if (confirmationType === OTPType.AccountReset) {
      navigate("/resetPassword", { state: urlState });
    }
  };
  useEffect(() => {
    if (success) {
      navigateToNextStep();
    }
  }, [success]);

  return (
    <AuthenticationHOC>
      <OTPConfirmation
        loading={error ? false : loading}
        onOTPConfirmation={onOTPConfirmation}
      />
    </AuthenticationHOC>
  );
};

export default OTPConfirmationPage;
