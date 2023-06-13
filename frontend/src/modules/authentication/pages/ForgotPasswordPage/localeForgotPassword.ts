import { IntlShape } from "react-intl";

export const localeForgotPassword = (intl: IntlShape) => {
  const accountRecovery = intl.formatMessage({
    id: "authentication.forgotPassword.title",
  });
  const subTitle = intl.formatMessage({
    id: "authentication.forgotPassword.subTitle",
  });

  const submit = intl.formatMessage({
    id: "authentication.forgotPassword.submit",
  });

  return { accountRecovery, subTitle, submit };
};
