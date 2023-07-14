import { Divider } from "antd";
import { IMenu } from "../../model/IMenu";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
type Props = {
  menus: IMenu[];
};
const DashboardSideBar = ({ menus }: Props) => {
  return (
    <div className="flex flex-col w-[250px] items-start relative dashboard-sidebar-container h-screen">
      <div className="flex w-full h-full justify-between">
        <div className="flex w-full flex-col items-start">
          <Profile />
          {menus.map((menu) => (
            <Menu
              key={menu.route}
              icon={menu.icon}
              name={menu.name}
              route={menu.route}
            />
          ))}
        </div>
        <Divider type="vertical" className="h-screen ml-0" />
      </div>
    </div>
  );
};

export default DashboardSideBar;
