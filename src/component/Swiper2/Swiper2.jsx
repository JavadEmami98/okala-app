import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper2.css";

// import required modules
import { Pagination } from "swiper/modules";
import CartSwiper from "../Cart/CartSwiper";


function Swiper2() {
  return (
    <div className="my-8 md:my-12">
      <div className="pr-4 mb-8 md:mb-12 md:px-4">
        <div className="relative flex flex-col items-center w-full min-h-[300px] md:px-2 pb-5 md:pb-4">
          <div className="w-full flex flex-col md:flex-row justify-center items-center px-4 lg:px-6 mb-8">
            <div className="flex flex-row-reverse items-center mb-4 md:mb-0 md:ml-4 font-black">
              <span
                className="flex items-center justify-center w-10 h-10 text-white rounded-md"
                style={{ backgroundColor: "rgb(235, 30, 39)" }}
              >
                00
              </span>
              <span
                className="mx-2 duration-1000 ease-linear animate-pulse"
                style={{ color: " rgb(235, 30, 39)" }}
              >
                :
              </span>
              <span
                className="flex items-center justify-center w-10 h-10 text-white rounded-md"
                style={{ backgroundColor: "rgb(235, 30, 39)" }}
              >
                77
              </span>
              <span
                className="mx-2 duration-1000 ease-linear animate-pulse"
                style={{ color: " rgb(235, 30, 39)" }}
              >
                :
              </span>
              <span
                className="flex items-center justify-center w-10 h-10 text-white rounded-md"
                style={{ backgroundColor: "rgb(235, 30, 39)" }}
              >
                37
              </span>
            </div>
            <div className="relative flex flex-grow w-full h-1 lg:mr-4 rounded-full">
              <span
                className="absolute top-0 right-0 w-full h-1 rounded-full opacity-20"
                style={{ backgroundColor: "rgb(235, 30, 39)" }}
              ></span>
              <span
                className="absolute top-0 right-0 z-10 h-1 rounded-full"
                style={{
                  backgroundColor: " rgb(235, 30, 39)",
                  width: "21.7222%",
                }}
              ></span>
            </div>
          </div>
          <>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="swiper2"
            >
              <SwiperSlide className="swiper-slide-2"><CartSwiper/></SwiperSlide>
              <SwiperSlide className="swiper-slide-2"><CartSwiper/></SwiperSlide>
              <SwiperSlide className="swiper-slide-2"><CartSwiper/></SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default Swiper2;
