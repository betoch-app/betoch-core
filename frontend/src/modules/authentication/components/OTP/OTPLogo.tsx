import SMSIcon from "../../../../media/images/sms.jpg";
const OTPLogo = () => {
  return (
    <div className="flex item-center justify-start">
      <img src={SMSIcon} alt="SMS icon" width={80} height={80} />
      <div className="flex flex-col item-start justify-center">
        <span className="font-bold text-blue-900 text-2xl">
          OTP by your phone
        </span>
        <span className=" text-gray-400">We use OTP by your phone</span>
      </div>
    </div>
  );
};

export default OTPLogo;
