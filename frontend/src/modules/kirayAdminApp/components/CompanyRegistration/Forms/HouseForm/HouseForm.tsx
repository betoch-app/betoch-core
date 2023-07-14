import {
  Button,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
} from "antd";
import { getFirstName } from "../../../../utils/consts";
import { useAppSelector } from "../../../../../core/hooks/redux-hooks";
import { useEffect, useState } from "react";
import SubmitButton from "../../../../../common/components/SubmitButton/SubmitButton";

type Props = {
  form: FormInstance;
  loading: boolean;
};
const HouseForm = ({ form, loading }: Props) => {
  const { data } = useAppSelector((state) => state.userSlice);
  const { full_name } = data;
  const [isHouseTypeSelected, setIsHouseTypeSelected] = useState(false);
  const [houseType, setHouseType] = useState("");
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isRentHavePenalty, setIsRentHavePenalty] = useState(false);

  useEffect(() => {}, [setIsRentHavePenalty]);
  const onHouseTypeSelection = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setHouseType(value);
    setIsHouseTypeSelected(true);
  };

  const onPenaltyChange = (e: RadioChangeEvent) => {
    const value: boolean = e.target.value;
    setIsRentHavePenalty(value);
  };

  const onPenaltyNumberChange = (value: number | string | null) => {
    form.setFieldsValue({
      penalty_percent: value,
    });
  };
  useEffect(() => {
    if (houseType === "private") {
      setLabel(
        `Can you enter some identifier to your house. E.g ${getFirstName(
          full_name
        )}'s house`
      );
      setPlaceholder("House identifier name");
      form.setFieldsValue({
        company_name: `${getFirstName(full_name)}'s house`,
      });
    } else {
      setLabel("Enter your organization name");
      setPlaceholder("Your organization name");
      form.setFieldsValue({
        company_name: "",
      });
    }
  }, [houseType, isHouseTypeSelected]);

  return (
    <>
      <Form.Item
        label="Is your house private or organization?"
        name={"house_type"}
      >
        <Radio.Group onChange={onHouseTypeSelection}>
          <Radio value={"private"}>Private</Radio>
          <Radio value={"organization"}>Organization</Radio>
        </Radio.Group>
      </Form.Item>

      {isHouseTypeSelected && (
        <>
          <Form.Item
            name={"company_name"}
            label={label}
            rules={[
              {
                required: true,
                message: "please enter your organization name",
              },
            ]}
          >
            <Input type="text" placeholder={placeholder} name="company_name" />
          </Form.Item>

          <Form.Item
            name={"has_penalty"}
            label="do you have penalty for tenants who do not pay early?"
            rules={[{ required: true, message: "Please select penalty type" }]}
          >
            <Radio.Group onChange={onPenaltyChange}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          {isRentHavePenalty && (
            <>
              <Form.Item name={"penalty_percent"} className="hidden">
                <Input name="penalty_percent" />
              </Form.Item>
              <InputNumber
                className="w-full"
                formatter={(value) => `${value}%`}
                parser={(value: string | undefined) => value!.replace("%", "")}
                onChange={onPenaltyNumberChange}
              />
            </>
          )}
          <SubmitButton loading={loading} text="Submit" />
        </>
      )}
    </>
  );
};

export default HouseForm;
