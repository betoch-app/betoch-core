import { Button } from "antd";

type Props = {
  id: number;
  title: string;
  color: string;
};
const PaymentCard = ({ id, title, color }: Props) => {
  return (
    <div className="flex flex-col payment-card pointer">
      <div className="flex flex-col p-3">
        <span className="text-gray-600 uppercase">{title}</span>
        <div className="flex justify-between items-center gap-4 mt-2">
          <div className="flex justify-between items-center gap-4">
            <span>icon</span>
            <span className="text-4xl font-bold">10</span>
          </div>
          <Button type="text" danger>
            Show
          </Button>
        </div>
      </div>
      <div style={{ borderBottom: `4px solid ${color}` }} />
    </div>
  );
};

export default PaymentCard;
