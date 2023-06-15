import SwiperHOC from "../../../core/hocs/SwiperHOC/SwiperHOC";
import { imagesData } from "../../../core/utils/consts";
import Logo from "../../../core/views/components/Logo/Logo";
import SwiperCard from "../SwiperCard/SwiperCard";

const LoginSideBar = () => {
  return (
    <div className="w-full h-full p-8 login-bg overflow-hidden">
      <Logo secondWordColor="#B9004E" firstWordColor="#fff" />
      <div className="flex justify-center items-center h-screen">
        <SwiperHOC spaceBetween={52} showPaginationDots>
          {imagesData.map((item, idx) => (
            <SwiperCard
              key={idx}
              description={item.description}
              image={item.image}
            />
          ))}
        </SwiperHOC>
      </div>
    </div>
  );
};

export default LoginSideBar;
