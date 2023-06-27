import { theme as themeToken } from "antd";
import { ReactNode } from "react";
import Logo from "../../../core/views/components/Logo/Logo";

type Props = {
  headerComponent: ReactNode;
};
const DashboardHeader = ({ headerComponent }: Props) => {
  const { useToken } = themeToken;
  const { token: theme } = useToken();
  return (
    <div
      className="flex w-full p-3 dashboard-header-container items-center "
      style={{ backgroundColor: theme.colorPrimary }}
    >
      <div className="p-2">
        <Logo
          className="title-small"
          firstWordColor="white"
          secondWordColor="#B9004E"
        />
      </div>
      <div className="ml-12 w-full">{headerComponent}</div>
    </div>
  );
};

export default DashboardHeader;
