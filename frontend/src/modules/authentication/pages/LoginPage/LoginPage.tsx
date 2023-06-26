import { Form, Input, Button } from "antd";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl.macro";
import { IntlShape, injectIntl } from "react-intl";
import { localLoginPage } from "./localeLoginPage";

type Props = {
  intl: IntlShape;
  onLogin: (values: any) => void;
  loading: boolean;
  message: string;
};
const LoginPage = ({ intl, onLogin, loading, message }: Props) => {
  const [loginForm] = Form.useForm();
  const {
    signInTitle,
    phoneLabel,
    phoneError,
    phonePlaceholder,
    passwordLabel,
    passwordError,
    forgotPassword,
    createNewAccount,
    loginBtnText,
    loginInfo,
    privacyPolicy,
  } = localLoginPage(intl);

  return (
    <AuthenticationHOC>
      <div>
        <span className="font-medium text-gray-900 text-2xl">
          {signInTitle}
        </span>
        <div className="mt-10">
          <Form
            onFinish={onLogin}
            form={loginForm}
            layout="vertical"
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
                    placeholder={phonePlaceholder}
                    name="phone"
                  />
                </Form.Item>
              </div>

              <div className="mb-2">
                <Form.Item
                  name="password"
                  label={passwordLabel}
                  rules={[
                    {
                      required: true,
                      message: `${passwordError}`,
                    },
                  ]}
                >
                  <Input
                    type={"password"}
                    placeholder={passwordLabel}
                    name="password"
                  />
                </Form.Item>
              </div>

              <div className="flex justify-start justify-between items-center">
                <Link to={"/forgotPassword"} className="forgot-link">
                  {forgotPassword}
                </Link>
                <Link to={"/signUp"} className="forgot-link font-bold">
                  {createNewAccount}
                </Link>
              </div>
              <span>{message}</span>
              <div className="mt-10 text-center">
                <Button
                  id="submit"
                  type="primary"
                  htmlType="submit"
                  className="w-full flex justify-center items-center space-x-3"
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
                          <span>{loginBtnText}</span>
                        </animateTransform>
                      </circle>
                    </svg>
                  ) : null}
                  <span>{loginBtnText}</span>
                </Button>
              </div>

              <div className="flex justify-start mt-5">
                <div>
                  <span>
                    {loginInfo}
                    <a
                      className="ml-2 font-bold"
                      target={"_blank"}
                      href={"https://google.com"}
                    >
                      {privacyPolicy}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </AuthenticationHOC>
  );
};

export default injectIntl(LoginPage);
