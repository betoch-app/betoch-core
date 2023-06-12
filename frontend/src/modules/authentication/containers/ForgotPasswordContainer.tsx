import { useState } from "react";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";

const ForgotPasswordContainer = () => {
  const [loading, setLoading] = useState(false);

  const onAccountRecovery = (values: any) => {
    setLoading(true);
    console.log(values);
  };
  return (
    <ForgotPasswordPage
      onAccountRecovery={onAccountRecovery}
      loading={loading}
    />
  );
};

export default ForgotPasswordContainer;
