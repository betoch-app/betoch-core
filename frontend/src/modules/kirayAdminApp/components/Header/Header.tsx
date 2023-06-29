import Profile from "../../../common/components/Profile/Profile";

const KirayAdminHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div />
      <div className="flex item-center justify-center">
        <Profile type="welcome" />
      </div>
    </div>
  );
};

export default KirayAdminHeader;
