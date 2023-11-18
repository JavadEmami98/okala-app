import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./SwiperProDetailMobile.css";

export default function SwiperProDetailMobile() {
  return (
    <>
      <Swiper className="swiper-pd" style={{borderBottom:"1px solid #f0f0f0",paddingBottom:"1rem",paddingTop:"0.5rem"}}>
        <SwiperSlide>
          <img src="/image/panir-pro.jpg" alt="" className="swiper-slide-pd-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/panir-pro2.jpg" alt="" className="swiper-slide-pd-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/panir-pro3.jpg" alt="" className="swiper-slide-pd-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/panir-pro4.jpg" alt="" className="swiper-slide-pd-img"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
