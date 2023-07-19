import { Button } from "antd";
import welcomeImage from "../../../../media/images/house.jpg";
import { useAppSelector } from "../../../core/hooks/redux-hooks";
import { getFirstName } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const { data } = useAppSelector((state) => state.userSlice);
  const { full_name } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={welcomeImage} alt="welcome" width={450} height={350} />
      <span className="text-4xl font-bold mb-5">{`Hello, ${getFirstName(
        full_name
      )}. Welcome to Kifiya Net`}</span>
      <span className="text-2xl">
        Start registering your house and control your rental transactions
      </span>
      <Button
        onClick={() => navigate("/company/register")}
        type="primary"
        className="mt-5"
      >
        Register my house
      </Button>
    </div>
  );
};

export default Welcome;
