import { useState } from "react";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const SignUpContainer = () => {
  const [loading, setLoading] = useState(false);
  const onSignUp = (values: any) => {
    setLoading(true);
    console.log(values);
  };
  return <SignUpPage onSignUp={onSignUp} loading={loading} />;
};

export default SignUpContainer;
