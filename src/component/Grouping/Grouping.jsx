import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperGrouping.css";

// import required modules
import { Pagination } from "swiper/modules";
import GroupingCart from "../Cart/GroupingCart";

const data = [
  { image: "/image/kharbar.png", title: "خواربار" },
  { image: "/image/labaniat.png", title: "لبنیات" },
  { image: "/image/ajil.png", title: "آجیل و خشکبار" },
  { image: "/image/conserv.png", title: "کنسرو و غذای آماده" },
  { image: "/image/drink.png", title: "نوشیدنی ها" },
  { image: "/image/soboone.png", title: "صبحانه" },
  { image: "/image/chitoz.png", title: "تنقلات" },
  {
    image: "https://cdn.okala.com/Media/Index_v2/Category/400976",
    title: "میوه و سبزیجات",
  },
];

function Grouping() {
  return (
    <div className="my-8">
      <p className="text-lg text-start leading-8 text-gray-900 font-bold mb-6">
        دسته‌بندی
      </p>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className=".swiper-slide-grouping">
            <GroupingCart image={item.image} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Grouping;
