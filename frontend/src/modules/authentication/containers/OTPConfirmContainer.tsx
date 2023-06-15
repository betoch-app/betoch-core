import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import { useEffect } from "react";
import { getOrganization } from "../slice/smsSlice";
import OTPConfirmationPage from "../pages/OTPPage/OTPConfirmationPage";

const OTPConfirmContainer = () => {
  const { state } = useLocation();
  const { formData } = state;

  const dispatch = useAppDispatch();
  const { organization, status, error } = useAppSelector(
    (state) => state.smsSlice
  );

  const { phone_number } = organization;

  useEffect(() => {
    dispatch(getOrganization());
  }, []);

  const onFinish = () => {};

  return (
    <OTPConfirmationPage
      onFinish={onFinish}
      organization_phone={phone_number}
      receiver_phone={formData.phone}
      status={status}
    />
  );
};

export default OTPConfirmContainer;
