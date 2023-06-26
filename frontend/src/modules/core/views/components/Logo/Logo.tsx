import { FormattedMessage } from "react-intl.macro";
import { useNavigate } from "react-router-dom";

type Props = {
  firstWordColor: string;
  secondWordColor: string;
  className: "title-small" | "title-big";
};
const Logo = ({ firstWordColor, secondWordColor, className }: Props) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="logo-container" onClick={() => goToHome()}>
      <span style={{ color: firstWordColor }} className={className}>
        <FormattedMessage id="logo.titles.kiray" defaultMessage={"Kiray"} />
      </span>
      <span style={{ color: secondWordColor }} className={className}>
        <FormattedMessage id="logo.titles.kifiya" defaultMessage={"Kifiya"} />
      </span>
    </div>
  );
};

export default Logo;
