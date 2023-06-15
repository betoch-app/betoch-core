import GenericSpinner from "../../../core/views/components/GenericSwipper/GenericSpinner";
import OTPConfirmation from "../../components/OTP/OTPConfirmation";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
type Props = {
  onFinish: () => void;
  organization_phone: string;
  receiver_phone: string;
  status: string;
};
const OTPConfirmationPage = ({
  onFinish,
  organization_phone,
  receiver_phone,
  status,
}: Props) => {
  return (
    <AuthenticationHOC>
      {status === "loading" && <GenericSpinner />}
      {status === "failed" && <span>Something is not good</span>}
      {status === "fulfilled" && (
        <OTPConfirmation
          receiver_phone={receiver_phone}
          organization_phone={organization_phone}
        />
      )}
    </AuthenticationHOC>
  );
};

export default OTPConfirmationPage;
