import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperProduct.css";

// import required modules
import { Pagination } from "swiper/modules";
import CartSwiper from "../Cart/CartSwiper";



function SwiperProduct({ title,data }) {
  return (
    <div className="pr-4 mb-8 md:mb-12 md:px-4">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center justify-between w-full pl-4">
          <p className="text-base font-bold text-gray-800 line-clamp-1">
            {title}
          </p>
          <div className="flex cursor-pointer">
          <p >
            مشاهده همه
            <KeyboardBackspaceOutlinedIcon
              sx={{ width: "18px", height: "18px", mr: "4px" }}
            />
          </p></div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
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
      </Swiper>
    </div>
  );
}

export default SwiperProduct;
