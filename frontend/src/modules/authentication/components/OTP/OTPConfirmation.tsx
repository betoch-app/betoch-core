import { Form, Input, Button } from "antd";
import { useState } from "react";
import OTPLogo from "./OTPLogo";
import localeOTP from "./localeOTP";
import { IntlShape, injectIntl } from "react-intl";
import CustomMDReactComponent from "../../../core/views/components/CustomMDReactComponent/CustomMDReactComponent";

type Props = {
  intl: IntlShape;
  receiver_phone: string;
  organization_phone: string;
};
const OTPConfirmation = ({
  intl,
  receiver_phone,
  organization_phone,
}: Props) => {
  const [OTPform] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { confirmationTitle } = localeOTP(intl, `**${organization_phone}**`);

  const onOtpFormFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20">
      <OTPLogo />
      <div className="mt-5">
        <CustomMDReactComponent
          text={confirmationTitle}
          className="font-medium text-gray-900 text-lg"
        />
        <Form
          onFinish={onOtpFormFinish}
          form={OTPform}
          layout="vertical"
          className="mt-5"
          requiredMark={false}
        >
          <div>
            <div className="mb-2">
              <Form.Item
                name="OTPCode"
                label={"Enter confirmation code"}
                rules={[
                  {
                    required: true,
                    message: `Confirmation code`,
                  },
                ]}
              >
                <Input
                  autoComplete="off"
                  type="text"
                  placeholder={"Enter the confirmation code"}
                  name="OTPCode"
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
                        <span>Submit</span>
                      </animateTransform>
                    </circle>
                  </svg>
                ) : null}
                <span>Submit</span>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default injectIntl(OTPConfirmation);
