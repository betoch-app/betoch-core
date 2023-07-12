import { Button, Form, Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import HouseForm from "./Forms/HouseForm/HouseForm";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import { getFirstName } from "../../utils/consts";

type Props = {
  onCompanyRegistration: (values: any) => void;
  loading: boolean;
};
const CompanyRegistration = ({ onCompanyRegistration, loading }: Props) => {
  const { data } = useAppSelector((state) => state.userSlice);

  const [companyRegistrationForm] = Form.useForm();
  const [rentType, setRentType] = useState(0);
  const [showHouseForm, setShowHouseForm] = useState(false);
  const onRentSelectionChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setRentType(value);
  };

  useEffect(() => {
    if (rentType === 1) {
      setShowHouseForm(true);
    }
  }, [rentType]);
  return (
    <div className="w-full p-5">
      <Form
        initialValues={{
          company_name: `${getFirstName(data.full_name)}'s house`,
        }}
        onFinish={onCompanyRegistration}
        form={companyRegistrationForm}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="rent_type"
          label="Select the property to Rent"
          rules={[
            {
              required: true,
              message: "please select your rent type",
            },
          ]}
        >
          <Radio.Group onChange={onRentSelectionChange}>
            <Radio value={1}>House</Radio>
            <Radio value={2}>Car</Radio>
            <Radio value={3}>Other</Radio>
          </Radio.Group>
        </Form.Item>
        {showHouseForm && (
          <HouseForm form={companyRegistrationForm} loading={loading} />
        )}
      </Form>
    </div>
  );
};

export default CompanyRegistration;
