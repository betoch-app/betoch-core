import { useState } from "react";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { useAppDispatch } from "../../core/hooks/redux-hooks";
import { ISignUp } from "../models/SignUp";
import { signUp } from "../slice/signUpSlice";

const SignUpContainer = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const onSignUp = (values: ISignUp) => {
    dispatch(signUp(values));
    setLoading(true);
  };

  return <SignUpPage onSignUp={onSignUp} loading={loading} />;
};

export default SignUpContainer;
