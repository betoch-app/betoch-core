import { Outlet } from "react-router-dom";
import DashboardHOC from "../../../common/HOC/DashboardHOC/DashboardHOC";
import { menus } from "../../utils/menus";
import KirayAdminHeader from "../Header/Header";

const Dashboard = () => {
  return (
    <DashboardHOC sideBarMenus={menus} header={<KirayAdminHeader />}>
      <div className="p-3">
        <Outlet />
      </div>
    </DashboardHOC>
  );
};

export default Dashboard;
