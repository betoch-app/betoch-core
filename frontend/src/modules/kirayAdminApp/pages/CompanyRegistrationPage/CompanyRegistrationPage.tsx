import { Divider, Skeleton } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import CompanyRegistration from "../../components/CompanyRegistration/CompanyRegistration";
import { getFirstName, getGreeting } from "../../utils/consts";
import { useState } from "react";
import { registerCompany } from "../../slice/companySlice";

const CompanyRegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const { data, loading: dataLoading } = useAppSelector(
    (state) => state.userSlice
  );
  const { full_name } = data;
  const dispatch = useAppDispatch();

  const onCompanyRegistration = (values: any) => {
    setLoading(true);
    dispatch(registerCompany(values));
  };
  return (
    <div className="flex">
      <Skeleton loading={dataLoading} active className="p-2">
        <div className="flex flex-col justify-start items-center w-4/5">
          <span className="text-3xl font-bold mb-3">{`${getGreeting()} ${getFirstName(
            full_name
          )}`}</span>
          <span className="font-bold text-2xl text-gray-600">
            Start controlling your rentals using Kiray Kifiya
          </span>
          <div className="w-4/5 pt-5">
            <CompanyRegistration
              onCompanyRegistration={onCompanyRegistration}
              loading={loading}
            />
          </div>
        </div>
      </Skeleton>

      <Skeleton loading={dataLoading} active className="p-2">
        <div className="flex w-2/5">
          <Divider className="h-screen" type="vertical" />
          <div>
            <span className="text-lg font-bold text-gray-500">
              Our customers
            </span>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default CompanyRegistrationPage;
