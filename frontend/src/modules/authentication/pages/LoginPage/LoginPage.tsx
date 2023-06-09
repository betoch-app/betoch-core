import LoginSideBar from '../../components/LoginSideBar/LoginSideBar';

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-row items-stretch">
      <div className="w-2/5">
        <LoginSideBar />
      </div>
    </div>
  );
};

export default LoginPage;
