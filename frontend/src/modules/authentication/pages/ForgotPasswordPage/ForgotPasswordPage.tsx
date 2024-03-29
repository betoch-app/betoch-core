import { Form, Input, Button } from "antd";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Link } from "react-router-dom";
import { localeForgotPassword } from "./localeForgotPassword";
import { IntlShape, injectIntl } from "react-intl";
import { localLoginPage } from "../LoginPage/localeLoginPage";
import { localeSignUpPage } from "../SignUpPage/localeSignUpPage";
type Props = {
  intl: IntlShape;
  onAccountRecovery: (values: any) => void;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};
const ForgotPasswordPage = ({
  intl,
  onAccountRecovery,
  loading,
  error,
  errorMessage,
}: Props) => {
  const [forgotPasswordForm] = Form.useForm();
  const { accountRecovery, subTitle, submit } = localeForgotPassword(intl);
  const { phoneLabel, phoneError, backToSignInText } = localeSignUpPage(intl);

  return (
    <AuthenticationHOC>
      <div className="flex flex-col justify-center items-start mx-8 md:mx-auto w-full md:w-1/2 lg:w-96 z-20">
        <div className="flex flex-col justify-start  items-start ">
          <span className="mt-4 font-bold">{accountRecovery}</span>
          <span className="mt-4">{subTitle}</span>
        </div>

        <div className="mt-6 w-full">
          <Form
            form={forgotPasswordForm}
            layout="vertical"
            onFinish={onAccountRecovery}
            requiredMark={false}
          >
            <div>
              <div className="mb-2">
                <Form.Item
                  name="phone"
                  label={phoneLabel}
                  rules={[
                    {
                      required: true,
                      message: `${phoneError}`,
                    },
                  ]}
                >
                  <Input
                    autoComplete="phone"
                    type="phone"
                    placeholder={phoneLabel}
                    name="phone"
                  />
                </Form.Item>
              </div>
              <span className="text-red-500">{errorMessage}</span>
              <div className="mt-10 text-center login-btn-container">
                <Button
                  id="forgot_submit"
                  type="primary"
                  htmlType="submit"
                  className="login-btn-container-btn w-full flex justify-center items-center space-x-3"
                >
                  {loading ? (
                    <svg
                      style={{
                        background: "none",
                        shapeRendering: "auto",
                      }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="8"
                        r="42"
                        strokeDasharray="113.09733552923255 150"
                        transform="rotate(306.582 50 50)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="1s"
                          values="0 50 50;360 50 50"
                          keyTimes="0;1"
                        >
                          <span>{submit}</span>
                        </animateTransform>
                      </circle>
                    </svg>
                  ) : null}
                  <span>{submit}</span>
                </Button>
              </div>

              <div className="flex justify-end mt-6 forgot-link">
                <Link to={"/"}>{backToSignInText}</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </AuthenticationHOC>
  );
};

export default injectIntl(ForgotPasswordPage);
