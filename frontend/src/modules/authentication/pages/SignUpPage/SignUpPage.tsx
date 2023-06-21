import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import SignUp from "../../components/SignUp/SignUp";
import OTPConfirmation from "../../components/OTP/OTPConfirmation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  } = useAppSelector((state) => state.signUpSlice);

  useEffect(() => {
    if (success) {
      navigate("/accountConfirmation", { state: data });
    }
  }, [success]);

  return (
    <AuthenticationHOC>
      <SignUp
        onSignUp={onSignUp}
        loading={error ? false : loading}
        error={error}
        errorMessage={message}
      />
    </AuthenticationHOC>
  );
};

export default SignUpPage;
