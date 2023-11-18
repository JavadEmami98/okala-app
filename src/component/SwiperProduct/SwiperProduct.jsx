import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperProduct.css";

// import required modules
import { Pagination } from "swiper/modules";
import CartSwiper from "../Cart/CartSwiper";
import { Box } from "@mui/material";

function SwiperProduct({ title, data }) {
  return (
    <div className="pr-4 mb-8 md:mb-12 md:px-4">
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:"1rem"}}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",paddingRight:"1rem"}}>
          <p className="text-base font-bold text-gray-800 line-clamp-1">
            {title}
          </p>
          <Box sx={{ display: "flex", cursor: "pointer" }}>
            <p>
              مشاهده همه
              <KeyboardBackspaceOutlinedIcon
                sx={{ width: "1.125rem", height: "1.125rem", ml: "0.25rem" }}
              />
            </p>
          </Box>
        </Box>
      </Box>
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
