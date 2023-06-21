import { useAppSelector } from "../../../core/hooks/redux-hooks";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import OTPConfirmation from "../../components/OTP/OTPConfirmation";

type Props = {
  onOTPConfirmation: (values: any) => void;
};
const OTPConfirmationPage = ({ onOTPConfirmation }: Props) => {
  const { success, message, error } = useAppSelector((state) => state.OTPSlice);
  return (
    <AuthenticationHOC>
      <OTPConfirmation onOTPConfirmation={onOTPConfirmation} />
    </AuthenticationHOC>
  );
};

export default OTPConfirmationPage;
