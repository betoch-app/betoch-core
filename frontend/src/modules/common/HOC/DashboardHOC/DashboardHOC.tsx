import { ReactNode } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSiderBar";
import { IMenu } from "../../model/IMenu";

type Props = {
  sideBarMenus: IMenu[];
  header: ReactNode;
  children: ReactNode;
};
const DashboardHOC = ({ sideBarMenus, header, children }: Props) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex w-full justify-between z-50 fixed">
        <DashboardHeader headerComponent={header} />
      </div>

      <div className="flex flex-row w-full main-container fixed">
        <div>
          <DashboardSideBar menus={sideBarMenus} />
        </div>

        <div className="w-full overflow-hidden z-40 h-screen">{children}</div>
      </div>
    </div>
  );
};

export default DashboardHOC;
