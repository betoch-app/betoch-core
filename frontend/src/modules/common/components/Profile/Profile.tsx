import { theme as themeToken, Avatar } from "antd";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import { getMe } from "../../slice/userSlice";

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
  const fullName = full_name.split(" ");
  const firstName = fullName[0];
  const lastName = fullName[1];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  if (loading) {
    return <span>Loading...</span>;
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
