import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import SignUp from "../../components/SignUp/SignUp";
import OTPConfirmation from "../../components/OTP/OTPConfirmation";

type Props = {
  onSignUp: (values: any) => void;
  loading: boolean;
};
const SignUpPage = ({ onSignUp, loading }: Props) => {
  const { success, message, error } = useAppSelector(
    (state) => state.signUpSlice
  );

  return (
    <AuthenticationHOC>
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20 ">
        {!success && (
          <SignUp
            onSignUp={onSignUp}
            loading={error ? false : loading}
            error={error}
            errorMessage={message}
          />
        )}
        {success && <OTPConfirmation />}
      </div>
    </AuthenticationHOC>
  );
};

export default SignUpPage;
