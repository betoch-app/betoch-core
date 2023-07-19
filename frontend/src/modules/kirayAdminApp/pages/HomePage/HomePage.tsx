import { Button, Card, Select, Skeleton } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import Welcome from "../../components/Welcome/Welcome";
import ModalHOC from "../../../common/HOC/ModalHOC/ModalHOC";
import { useEffect, useState } from "react";
import CompanyRegistration from "../../components/CompanyRegistration/CompanyRegistration";
import { payments } from "../../utils/consts";
import { addNewCompany, getMe } from "../../../common/slice/userSlice";
import { registerCompany } from "../../slice/companySlice";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { loading, data } = useAppSelector((state) => state.userSlice);
  const { company } = data;
  const [selectedHouse, setSelectedHouse] = useState({
    value: 0,
    label: "",
    title: "",
  });

  //new house registrations data
  const [newHouseFormData, setNewHouseFormData] = useState(null);
  const [newHouseRegistrationLoading, setNewHouseRegistrationLoading] =
    useState(false);
  const { success } = useAppSelector((state) => state.companySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.company.length > 0) {
      setSelectedHouse({
        value: company[0].id,
        label: company[0].company_name,
        title: company[0].company_name,
      });
    }
  }, [data]);

  useEffect(() => {
    if (success) {
      dispatch(getMe());
      setIsModalVisible(false);
    }
  }, [success]);

  const onHouseFormSubmit = (values: any) => {
    setNewHouseRegistrationLoading(true);
    setNewHouseFormData(values);
    dispatch(registerCompany(values));
  };

  const registerNewHouse = () => {
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onHandleHouseSelection = (value) => {
    const currentSelectedValue = company.find((_) => _.id === value);
    setSelectedHouse({
      value: currentSelectedValue.id,
      label: currentSelectedValue.company_name,
      title: currentSelectedValue.company_name,
    });
  };

  if (loading)
    return (
      <div className="flex flex-col">
        <Skeleton active className="mb-20" />
        <Skeleton active />
      </div>
    );

  if (company.length <= 0) return <Welcome />;

  return (
    <div className="flex flex-col">
      {/**Payment cards */}
      <Card title="Payments" className="mb-5">
        <div className="grid grid-cols-4 gap-4">
          {payments.map((item) => (
            <PaymentCard key={item.id} {...item} />
          ))}
        </div>
      </Card>
      {/**Houses or companies */}
      <Card
        title={`${selectedHouse.label} information`}
        className="h-screen"
        extra={
          <div className="flex items-center gap-4 w-full">
            <span>Select house:</span>
            <Select
              onSelect={onHandleHouseSelection}
              size="middle"
              placeholder="Houses"
              optionFilterProp="children"
              value={selectedHouse}
              options={company.map((_, index) => {
                return {
                  key: index,
                  value: _.id,
                  title: _.company_name,
                  label: _.company_name,
                };
              })}
            />
            <Button type="primary" size="middle" onClick={registerNewHouse}>
              Register new house
            </Button>
          </div>
        }
      ></Card>
      <ModalHOC
        isModalVisible={isModalVisible}
        title="Register new house"
        onCloseModal={onCloseModal}
        children={
          <CompanyRegistration
            onCompanyRegistration={onHouseFormSubmit}
            loading={newHouseRegistrationLoading}
          />
        }
      />
    </div>
  );
};

export default HomePage;
