import { Icon } from "@iconify/react";
import { IMenu } from "../../common/model/IMenu";

export const menus: IMenu[] = [
  {
    name: "Home",
    route: "/",
    icon: <Icon fontSize={24} icon="material-symbols:home" />,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: <Icon fontSize={24} icon={"material-symbols:settings"} />,
  },
];
