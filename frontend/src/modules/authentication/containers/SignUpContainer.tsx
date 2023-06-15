import { useState } from "react";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSignUp = (values: any) => {
    navigate("/accountConfirmation", {
      state: { formData: values, otp_type: 1 },
    });
    setLoading(true);
  };
  return <SignUpPage onSignUp={onSignUp} loading={loading} />;
};

export default SignUpContainer;
