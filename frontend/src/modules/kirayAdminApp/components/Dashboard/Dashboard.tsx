import { Outlet } from "react-router-dom";
import DashboardHOC from "../../../common/DashboardHOC/DashboardHOC";
import { menus } from "../../utils/menus";
import KirayAdminHeader from "../Header/Header";

const Dashboard = () => {
  return (
    <DashboardHOC sideBarMenus={menus} header={<KirayAdminHeader />}>
      <Outlet />
    </DashboardHOC>
  );
};

export default Dashboard;
