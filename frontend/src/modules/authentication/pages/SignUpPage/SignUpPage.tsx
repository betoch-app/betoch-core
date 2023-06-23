import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import SignUp from "../../components/SignUp/SignUp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OTPType } from "../../components/OTP/OTPType";
type Props = {
  onSignUp: (values: any) => void;
  loading: boolean;
};
const SignUpPage = ({ onSignUp, loading }: Props) => {
  const navigate = useNavigate();
  const {
    success,
    data = { phone: "" },
    message,
    error,
  } = useAppSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (success) {
      navigate("/accountConfirmation", {
        state: { ...data, OTPType: OTPType.AccountConfirmation },
      });
    }
  }, [success]);

  return (
    <AuthenticationHOC>
      <SignUp
        onSignUp={onSignUp}
        loading={error ? false : loading}
        error={error}
        errorMessage={success ? "" : message}
      />
    </AuthenticationHOC>
  );
};

export default SignUpPage;
