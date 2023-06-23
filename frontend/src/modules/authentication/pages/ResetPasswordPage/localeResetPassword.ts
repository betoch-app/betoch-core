import { IntlShape } from "react-intl";

export const localResetPassword = (intl: IntlShape) => {
  const resetTitle = intl.formatMessage({
    id: "authentication.resetPassword.title",
  });
  const newPassword = intl.formatMessage({
    id: "authentication.resetPassword.newPassword",
  });

  const newPasswordPlaceholder = intl.formatMessage({
    id: "authentication.resetPassword.newPasswordPlaceholder",
  });

  const confirmNewPassword = intl.formatMessage({
    id: "authentication.resetPassword.confirmNewPassword",
  });
  const confirmNewPasswordPlaceholder = intl.formatMessage({
    id: "authentication.resetPassword.confirmationPasswordPlaceholder",
  });

  const submitButtonText = intl.formatMessage({
    id: "authentication.resetPassword.resetButtonText",
  });

  return {
    resetTitle,
    newPassword,
    newPasswordPlaceholder,
    confirmNewPassword,
    confirmNewPasswordPlaceholder,
    submitButtonText,
  };
};
