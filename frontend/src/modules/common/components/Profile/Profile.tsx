import { theme as themeToken, Avatar, Skeleton } from "antd";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import { getMe } from "../../slice/userSlice";
import { getFirstName, getLastName } from "../../../kirayAdminApp/utils/consts";

type Props = {
  type?: "welcome" | "avatar";
};
const Profile = ({ type = "avatar" }: Props) => {
  const { useToken } = themeToken;
  const { token: theme } = useToken();
  const { loading, data } = useAppSelector((state) => state.userSlice);
  const { full_name } = data;

  // Find first letters of full name to
  // display if there is no profile image
  const firstName = getFirstName(full_name);
  const lastName = getLastName(full_name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  if (loading) {
    return type === "avatar" ? (
      <div className="flex flex-col items-center justify-center w-full p-5">
        <Skeleton.Avatar active className="mb-5" />
        <Skeleton.Input active />
      </div>
    ) : (
      <Skeleton.Input />
    );
  }

  return (
    <>
      {type === "avatar" ? (
        <div className="flex flex-col p-5 gap-3 w-full items-center justify-center">
          <Avatar size={86} style={{ backgroundColor: theme.colorPrimary }}>
            {`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
          </Avatar>
          <span className="text-2xl">{full_name}</span>
        </div>
      ) : (
        <span>{`Hello, ${firstName} welcome to Kiray kifiya`}</span>
      )}
    </>
  );
};

export default Profile;
