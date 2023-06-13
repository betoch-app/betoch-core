import { FormattedMessage } from "react-intl.macro";

type Props = {
  firstWordColor: string;
  secondWordColor: string;
};
const Logo = ({ firstWordColor, secondWordColor }: Props) => {
  return (
    <div className="logo-container">
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
