import Dot from './Dot';
type Props = {
  kAlphabetsColor: string;
  dotColor: string;
  dotHeight: number;
  dotWidth: number;
};
const Logo = ({ kAlphabetsColor, dotColor, dotHeight, dotWidth }: Props) => {
  return (
    <div className="logo-container w-1/5">
      <div className="big-letters-container">
        <span className="big-letters" style={{ color: kAlphabetsColor }}>
          K
        </span>
        <Dot height={dotHeight} width={dotWidth} color={dotColor} />
        <span className="big-letters">K</span>
      </div>
      <div className="titles-container">
        <span style={{ color: dotColor }} className="title">
          Kiray
        </span>
        <span style={{ color: dotColor }} className="title ml-2">
          Kifiya
        </span>
      </div>
    </div>
  );
};

export default Logo;
