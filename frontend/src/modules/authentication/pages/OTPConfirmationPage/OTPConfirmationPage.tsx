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
import { storeToken } from "../../../core/services/token.service";
import { changeApplication } from "../../../core/slices/applicationsSlice";
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
  const { success, error, data } = useAppSelector((state) => state.OTPSlice);
  const navigate = useNavigate();
  const { access_token, refresh_token, role } = data;
  const dispatch = useAppDispatch();

  const navigateToNextStep = () => {
    if (confirmationType === OTPType.AccountReset) {
      navigate("/resetPassword", { state: urlState });
    }

    if (confirmationType === OTPType.AccountConfirmation) {
      dispatch(changeApplication(role.toString()));
      navigate("/");
      storeToken(access_token, refresh_token, role.toString());
    }
  };
  useEffect(() => {
    if (success) {
      navigateToNextStep();
    }

    return () => {
      dispatch(clearInitialState());
    };
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
