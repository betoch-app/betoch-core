import { IntlShape } from "react-intl";

export const localeOTP = (intl: IntlShape, phoneNumber: string) => {
  const confirmationTitle = intl.formatMessage(
    {
      id: "authentication.otp.confirmationTitle",
      defaultMessage:
        "We have sent you a confirmation code to your phone by {phone} phone number",
    },
    { phone: phoneNumber }
  );

  return { confirmationTitle };
};

export default localeOTP;
