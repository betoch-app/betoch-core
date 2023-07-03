import { useAppSelector } from "../../../core/hooks/redux-hooks";
import { RegisterCompany } from "../Company/RegisterCompany/RegisterCompany";

const Home = () => {
  const { data } = useAppSelector((state) => state.userSlice);
  const { company } = data;

  if (company.length <= 0) {
    return <RegisterCompany />;
  } else {
    return <div>Home</div>;
  }
};

export default Home;
