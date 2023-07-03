import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  route: string;
  icon: ReactNode;
};
const Menu = ({ name, route, icon }: Props) => {
  const navigate = useNavigate();

  const navigateToRoute = () => {
    navigate(route);
  };
  return (
    <div
      className="flex items-center text-lg p-2 w-full menu-container justify-start gap-2 mb-1 cursor-pointer"
      onClick={navigateToRoute}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default Menu;
