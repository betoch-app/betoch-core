import { Form, Input, Button } from "antd";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Link } from "react-router-dom";

type Props = {
  onLogin: (values: any) => void;
  loading: boolean;
};
const LoginPage = ({ onLogin, loading }: Props) => {
  const [loginForm] = Form.useForm();
  return (
    <AuthenticationHOC>
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20 ">
        <span className="font-medium text-gray-900 text-2xl">
          Sign into Kiray Kifiya
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
                  name="email"
                  label="Email Address"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email address.",
                    },
                  ]}
                >
                  <Input
                    autoComplete="email"
                    type="email"
                    placeholder={"Email"}
                    name="email"
                  />
                </Form.Item>
              </div>

              <div className="mb-2">
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid password",
                    },
                  ]}
                >
                  <Input
                    type={"password"}
                    placeholder="Password"
                    name="password"
                  />
                </Form.Item>
              </div>

              <div className="flex justify-start justify-between">
                <Link to={"/forgot-password"} className="forgot-link">
                  Forgot password
                </Link>
                <Link to={"/signup"} className="forgot-link font-bold">
                  Create new account
                </Link>
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
                          <span>Log in</span>
                        </animateTransform>
                      </circle>
                    </svg>
                  ) : null}
                  <span>Log in</span>
                </Button>
              </div>

              <div className="flex justify-start mt-5">
                <div>
                  <span>
                    By logging in, you agree to our
                    <a
                      className="ml-2 font-bold"
                      target={"_blank"}
                      href={"https://google.com"}
                    >
                      Privacy Policy
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

export default LoginPage;
