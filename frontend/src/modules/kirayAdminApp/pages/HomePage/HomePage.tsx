import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import CompanyRegistrationPage from "../CompanyRegistrationPage/CompanyRegistrationPage";

const HomePage = () => {
  const { data } = useAppSelector((state) => state.userSlice);
  const { company } = data;
  const navigate = useNavigate();

  if (company.length <= 0) navigate("/company/register");

  return <div>Home page</div>;
};

export default HomePage;
