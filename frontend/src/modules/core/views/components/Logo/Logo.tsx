import { FormattedMessage } from "react-intl.macro";
import { useNavigate } from "react-router-dom";

type Props = {
  firstWordColor: string;
  secondWordColor: string;
};
const Logo = ({ firstWordColor, secondWordColor }: Props) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="logo-container" onClick={() => goToHome()}>
      <span style={{ color: firstWordColor }} className="title">
        <FormattedMessage id="logo.titles.kiray" defaultMessage={"Kiray"} />
      </span>
      <span style={{ color: secondWordColor }} className="title">
        <FormattedMessage id="logo.titles.kifiya" defaultMessage={"Kifiya"} />
      </span>
    </div>
  );
};

export default Logo;
