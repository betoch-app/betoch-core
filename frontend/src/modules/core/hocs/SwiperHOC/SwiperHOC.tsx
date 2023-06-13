import classNames from "classnames";
import { FC, ReactNode } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  title?: string;
  children: ReactNode[];
  showPaginationDots?: boolean;
  slidesPerView?: number | "auto";
  className?: string;
  titleClassName?: string;
  spaceBetween?: number;
  currentDesignSet?: string;
  storedType?: string;
};

const SwiperHOC = ({
  title,
  children,
  showPaginationDots = true,
  slidesPerView = "auto",
  className,
  titleClassName,
  spaceBetween = 13,
}: Props) => {
  return (
    <div className={classNames("swiper-container", className)}>
      {title && (
        <div className={classNames("swiper-title", titleClassName)}>
          <span>{title}</span>
        </div>
      )}
      <Swiper
        modules={[Pagination]}
        pagination={showPaginationDots ? { clickable: true } : false}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={{ delay: 5000 }}
      >
        {children?.map((item, idx, orginalArr) =>
          Array.isArray(item) ? (
            item.map((subItem, subItemIdx) => (
              <SwiperSlide key={subItemIdx.toString()}>{subItem}</SwiperSlide>
            ))
          ) : (
            <SwiperSlide
              key={
                Array.isArray(orginalArr[0])
                  ? (orginalArr[0].length + 1).toString()
                  : idx.toString()
              }
            >
              {item}
            </SwiperSlide>
          )
        )}
        {showPaginationDots && <div className="hidden-pagination-block" />}
      </Swiper>
    </div>
  );
};

export default SwiperHOC;
