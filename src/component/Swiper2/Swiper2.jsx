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

const item1 = [
  {
    image: "/image/cream.jpg",
    oldprice: " 325,000 ",
    price: " 243,000  ",
    offer: "25%",
    description: "خامه صبحانه 200 گرمی رامک",
  },
  {
    image: "/image/mast.jpg",
    oldprice: " 770,000 ",
    price: "  539,000 ",
    offer: "30%",
    description: "ماست 3.2درصد چربی 2 کیلویی صباح",
  },
  {
    image: "/image/pak.jpg",
    oldprice: " 150,000 ",
    price: "  118,500 ",
    offer: "21%",
    description: "دوغ بدون گاز نعناع و پونه 1 لیتری پاک",
  },
  {
    image: "/image/panir.jpg",
    oldprice: " 490,000 ",
    price: "  294,000 ",
    offer: "40%",
    description: "پنیر سفید 400 گرمی رامک",
  },
  {
    image: "/image/shir.jpg",
    oldprice: "390,000  ",
    price: "  351,000 ",
    offer: "10%",
    description: "شیر پر چرب 1 لیتری دومینو",
  },
  {
    image: "/image/ruzane.jpg",
    oldprice: "  810,000",
    price: "  729,000 ",
    offer: "10%",
    description: "پنیر نسبتا چرب 510گرمی روزانه ",
  },
  {
    image: "/image/mast7.jpg",
    oldprice: "  520,000",
    price: "  469,000 ",
    offer: "10%",
    description: "ماست  پرچرب سون 900 گرمی کاله  ",
  },
];

function Swiper2() {
  return (
    <div className="my-8 md:my-12">
      <div className="pr-4 mb-8 md:mb-12 md:px-4">
        <div className="relative flex flex-col items-center w-full min-h-[300px] md:px-2 pb-5 md:pb-4 overflow-hidden">
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
          <div className="container relative">
            <Swiper
              style={{ paddingBottom: "15px", overflow: "hidden" }}
              slidesPerView={3}
              spaceBetween={10}
              pagination={false}
              modules={[Pagination]}
              className="swiper2"
            >
              <SwiperSlide className="swiper-slide-2">
                <div className="flex flex-col h-[270px] py-2 justify-between">
                  <p
                    className="text-xl font-black text-center"
                    style={{ color: "rgb(235, 30, 39)" }}
                  >
                    اُتایم
                  </p>
                  <div className="z-10">
                    <img
                      src="/image/darsad.png"
                      alt=""
                      className="h-[140px] w-[140px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
              {item1.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide-product">
                  <CartSwiper
                    image={item.image}
                    oldprice={item.oldprice}
                    price={item.price}
                    offer={item.offer}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
              <div
                className="absolute bottom-0 left-0 flex items-end justify-center right-0 w-full h-56 rounded-xl"
                style={{ backgroundColor: "rgb(235, 30, 39)" }}
              ></div>
            </Swiper>
          </div>
          {/*  <>
            <Swiper
               style={{zIndex:10,position:"relative"}}
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              pagination={false}
              modules={[Pagination]}
              className="swiper2"
            >
              <SwiperSlide className="swiper-slide-2">
                <CartSwiper />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-2">
                <CartSwiper />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-2">
                <CartSwiper />
              </SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
                  <div className="absolute bottom-0 left-0 flex items-end justify-center right-0 w-full h-56 rounded-xl" style={{backgroundColor:"rgb(235, 30, 39)"}}></div>
            </Swiper>
          </> */}
        </div>
      </div>
    </div>
  );
}

export default Swiper2;
