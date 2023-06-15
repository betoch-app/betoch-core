import { Form, Input, Button } from "antd";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Link } from "react-router-dom";
import { IntlShape, injectIntl } from "react-intl";
import { localeSignUpPage } from "./localeSignUpPage";

type Props = {
  intl: IntlShape;
  onSignUp: (values: any) => void;
  loading: boolean;
};
const SignUpPage = ({ intl, onSignUp, loading }: Props) => {
  const [signUpForm] = Form.useForm();
  const {
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
    signUpBtnText,
    backToSignInText,
  } = localeSignUpPage(intl);

  return (
    <AuthenticationHOC>
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20 ">
        <span className="font-medium text-gray-900 text-2xl">
          {signUpTitle}
        </span>
        <div className="mt-10">
          <Form
            onFinish={onSignUp}
            form={signUpForm}
            layout="vertical"
            requiredMark={false}
          >
            <div>
              <div className="mb-2">
                <Form.Item
                  name="fullName"
                  label={fullNameLabel}
                  rules={[
                    {
                      required: true,
                      message: `${fullNameError}`,
                    },
                  ]}
                >
                  <Input
                    autoComplete="off"
                    type="text"
                    placeholder={fullNamePlaceholder}
                    name="fullName"
                  />
                </Form.Item>
              </div>

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

              <div className="mb-2">
                <Form.Item
                  name="password"
                  label={password}
                  rules={[
                    {
                      required: true,
                      message: `${passwordError}`,
                    },
                  ]}
                >
                  <Input
                    type={"password"}
                    placeholder={password}
                    name="password"
                  />
                </Form.Item>
              </div>

              <div className="mb-2">
                <Form.Item
                  name="confirmPassword"
                  label={confirmPassword}
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: `${confirmPasswordError}`,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(`${confirmPasswordError}`)
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    type={"password"}
                    placeholder={confirmPassword}
                    name="password"
                  />
                </Form.Item>
              </div>

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
                          <span>{signUpBtnText}</span>
                        </animateTransform>
                      </circle>
                    </svg>
                  ) : null}
                  <span>{signUpBtnText}</span>
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

export default injectIntl(SignUpPage);
