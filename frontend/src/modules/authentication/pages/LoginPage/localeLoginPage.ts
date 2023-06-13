import { IntlShape } from "react-intl";

export const localLoginPage = (intl: IntlShape) => {
  const signInTitle = intl.formatMessage({ id: "authentication.signin.title" });
  const phoneLabel = intl.formatMessage({
    id: "authentication.signin.phoneLabel",
  });
  const phonePlaceholder = intl.formatMessage({
    id: "authentication.signin.phonePlaceholder",
  });
  const phoneError = intl.formatMessage({
    id: "authentication.signin.phoneError",
  });
  const passwordLabel = intl.formatMessage({
    id: "authentication.signin.passwordLabel",
  });
  const passwordError = intl.formatMessage({
    id: "authentication.signin.passwordError",
  });
  const forgotPassword = intl.formatMessage({
    id: "authentication.signin.forgotPassword",
  });
  const createNewAccount = intl.formatMessage({
    id: "authentication.signin.createNewAccount",
  });
  const loginBtnText = intl.formatMessage({
    id: "authentication.signin.loginBtn",
  });
  const loginInfo = intl.formatMessage({
    id: "authentication.signin.logginInfo",
  });
  const privacyPolicy = intl.formatMessage({
    id: "authentication.signin.privacyPolicy",
  });

  return {
    signInTitle,
    phoneLabel,
    phonePlaceholder,
    phoneError,
    passwordLabel,
    passwordError,
    forgotPassword,
    createNewAccount,
    loginBtnText,
    loginInfo,
    privacyPolicy,
  };
};
