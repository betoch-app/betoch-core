import { IntlShape } from "react-intl";

export const localeSignUpPage = (intl: IntlShape) => {
  const signUpTitle = intl.formatMessage({
    id: "authentication.signUp.title",
    defaultMessage: "Sign up kiray kifiya",
  });
  const fullNameLabel = intl.formatMessage({
    id: "authentication.signUp.fullNameLabel",
  });
  const fullNamePlaceholder = intl.formatMessage({
    id: "authentication.signUp.fullNamePlaceholder",
  });
  const fullNameError = intl.formatMessage({
    id: "authentication.signUp.fullNameError",
  });
  const phoneLabel = intl.formatMessage({
    id: "authentication.signUp.phoneNumber",
  });
  const phoneError = intl.formatMessage({
    id: "authentication.signUp.phoneNumberError",
  });

  const password = intl.formatMessage({
    id: "authentication.signUp.password",
  });
  const passwordError = intl.formatMessage({
    id: "authentication.signUp.passwordError",
  });
  const confirmPassword = intl.formatMessage({
    id: "authentication.signUp.confirmPassword",
  });
  const confirmPasswordError = intl.formatMessage({
    id: "authentication.signUp.confirmPasswordError",
  });

  const signUbBtnText = intl.formatMessage({
    id: "authentication.signUp.signUpBtnText",
  });
  const backToSignInText = intl.formatMessage({
    id: "authentication.signUp.backToLoginText",
  });

  return {
    signUpTitle,
    fullNameLabel,
    fullNamePlaceholder,
    fullNameError,
    phoneLabel,
    phoneError,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
    signUbBtnText,
    backToSignInText,
  };
};
