import { useAppSelector } from "../../../core/hooks/redux-hooks";
import CompanyRegistrationPage from "../CompanyRegistrationPage/CompanyRegistrationPage";

const HomePage = () => {
  const { data } = useAppSelector((state) => state.userSlice);
  const { company } = data;

  if (company.length <= 0) return <CompanyRegistrationPage />;

  return <div>Home page</div>;
};

export default HomePage;
