import { Form, Input, Button } from "antd";
import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Link } from "react-router-dom";

type Props = {
  onSignUp: (values: any) => void;
  loading: boolean;
};
const SignUpPage = ({ onSignUp, loading }: Props) => {
  const [signUpForm] = Form.useForm();

  return (
    <AuthenticationHOC>
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20 ">
        <span className="font-medium text-gray-900 text-2xl">
          Sign up Kiray Kifiya
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
                  label="Full name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name E.g Mahder Girma",
                    },
                  ]}
                >
                  <Input
                    autoComplete="off"
                    type="text"
                    placeholder="Full name e.g Mahder Girma"
                    name="fullName"
                  />
                </Form.Item>
              </div>

              <div className="mb-2">
                <Form.Item
                  name="phone"
                  label="Phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number.",
                    },
                  ]}
                >
                  <Input
                    autoComplete="phone"
                    type="phone"
                    placeholder={"Phone number"}
                    name="phone"
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
                      message: "Please enter your password",
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

              <div className="mb-2">
                <Form.Item
                  name="confirmPassword"
                  label="Confirm password"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password",
                    },
                  ]}
                >
                  <Input
                    type={"password"}
                    placeholder="Confirm password"
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
                          <span>Sign up</span>
                        </animateTransform>
                      </circle>
                    </svg>
                  ) : null}
                  <span>Sign up</span>
                </Button>
              </div>

              <div className="flex justify-end mt-6 forgot-link">
                <Link to={"/"}>Back to Sign in</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </AuthenticationHOC>
  );
};

export default SignUpPage;
