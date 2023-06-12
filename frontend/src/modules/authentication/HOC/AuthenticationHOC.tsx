import { ReactNode } from "react";
import LoginSideBar from "../components/LoginSideBar/LoginSideBar";
import LanguageSwitcher from "../../core/views/components/LanguageSwitcher/LanguageSwitcher";

type Props = {
  children: ReactNode;
};

const AuthenticationHOC = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex flex-row items-stretch">
      <div className="w-2/5">
        <LoginSideBar />
      </div>
      <div className="flex flex-col w-3/5 p-2">
        <div className="flex flex-row w-full justify-end items-center">
          <LanguageSwitcher />
        </div>
        <div className="flex justify-center items-center h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationHOC;
