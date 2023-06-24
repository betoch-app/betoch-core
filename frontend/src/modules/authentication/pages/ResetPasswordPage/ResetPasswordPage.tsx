import AuthenticationHOC from "../../HOC/AuthenticationHOC";
import { Form, Input, Button } from "antd";
import { IResetPassword } from "../../models/ResetPassword";
import { IntlShape, injectIntl } from "react-intl";
import { localResetPassword } from "./localeResetPassword";
import { localeSignUpPage } from "../SignUpPage/localeSignUpPage";
type Props = {
  intl: IntlShape;
  onReset: (values: IResetPassword) => void;
  loading: boolean;
  error: boolean;
  message: string;
};
const ResetPasswordPage = ({
  intl,
  onReset,
  loading,
  error,
  message,
}: Props) => {
  const [resetPasswordForm] = Form.useForm();

  const {
    resetTitle,
    newPassword,
    newPasswordPlaceholder,
    confirmNewPasswordPlaceholder,
    confirmNewPassword,
    submitButtonText,
  } = localResetPassword(intl);
  const { passwordError, confirmPasswordError } = localeSignUpPage(intl);
  return (
    <AuthenticationHOC>
      <div>
        <span className="font-medium text-gray-900 text-2xl">{resetTitle}</span>
        <div className="mt-10">
          <Form
            onFinish={onReset}
            form={resetPasswordForm}
            layout="vertical"
            requiredMark={false}
          >
            <div className="mb-2">
              <Form.Item
                name="password"
                label={newPassword}
                rules={[
                  {
                    required: true,
                    message: `${passwordError}`,
                  },
                ]}
              >
                <Input
                  type={"password"}
                  placeholder={newPasswordPlaceholder}
                  name="password"
                />
              </Form.Item>
            </div>

            <div className="mb-2">
              <Form.Item
                name="confirmPassword"
                label={confirmNewPassword}
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
                  placeholder={confirmNewPasswordPlaceholder}
                  name="confirmPassword"
                />
              </Form.Item>
            </div>
            <span className="text-red-500">{message}</span>
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
                        <span>{submitButtonText}</span>
                      </animateTransform>
                    </circle>
                  </svg>
                ) : null}
                <span>{submitButtonText}</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AuthenticationHOC>
  );
};

export default injectIntl(ResetPasswordPage);
