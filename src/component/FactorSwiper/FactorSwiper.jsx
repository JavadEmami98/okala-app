import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./FactorSwiper.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import CartFactorSwiper from "../Cart/CartFactorSwiper";

const breakpoints = {
  1024: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  680: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

export default function FactorSwiper() {
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        grid={{
          rows: 2,
        }}
        pagination={false}
        modules={[Grid, Pagination]}
        className="swiper-fac"
        style={{ height: "100%", width: "100%" }}
      >
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-fac">
          <CartFactorSwiper />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
