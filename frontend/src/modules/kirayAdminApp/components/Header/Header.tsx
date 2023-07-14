import LanguageSwitcher from "../../../common/components/LanguageSwitcher/LanguageSwitcher";
import Profile from "../../../common/components/Profile/Profile";

const KirayAdminHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div />
      <div className="flex items-center justify-center gap-4">
        <Profile type="welcome" />
        <LanguageSwitcher type="select" />
      </div>
    </div>
  );
};

export default KirayAdminHeader;
