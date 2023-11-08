import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swiper1() {
  return (
    <>
      <Swiper
        style={{ borderRadius: "0.5rem", margin: "16px 0px" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletActiveClass: "swiper-pagination-bullet-active-1",
          bulletClass: "swiper-pagination-bullet",
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative group"
      >
        <SwiperSlide className="swiper-slide-1">
          <img src="/image/swiper1-1.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <img src="/image/swiper1-2.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <img src="/image/swiper1-3.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <img src="/image/swiper1-4.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <img src="/image/swiper1-5.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <div className="absolute md:flex hidden sm:hidden lg:flex items-center justify-center rounded-[50%]  h-[48px] w-[48px] bg-[#fff] right-6  top-[46%] z-10  button-prev-slide ">
          <ArrowForwardIosIcon
            sx={{
              color: "#000",
              cursor: "pointer",
              p: "3px",
            }}
          />
        </div>
        <div className="absolute md:flex hidden sm:hidden lg:flex items-center justify-center rounded-[50%]  h-[48px] w-[48px] bg-[#fff]  left-6  top-[46%]  z-10 button-next-slide">
          <ArrowBackIosNewIcon
            sx={{
              color: "#000",
              cursor: "pointer",
              p: "3px",
            }}
          />
        </div>
      </Swiper>
    </>
  );
}
