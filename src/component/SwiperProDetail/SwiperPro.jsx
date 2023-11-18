import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./SwiperPro.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box } from "@mui/material";

export default function SwiperPro() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [indexOfImage, setindexOfImage] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [showThumbnail, setshowThumbnail] = useState({});
  const slideTo = (index) => swiper.slideTo(index);
  return (
    <>
      <Box
        sx={{
          width: "5.75rem",
          marginRight: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            height: "5.625rem",
            width: "5.625rem",
            border: "1px solid #e6e6e6",
            borderRadius: "0.75rem",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          <img
            src="/image/panir-pro.jpg"
            alt=""
            onClick={() => {
              setindexOfImage(0);
              slideTo(0);
            }}
          />
        </Box>
        <Box
          sx={{
            height: "5.625rem",
            width: "5.625rem",
            border: "1px solid #e6e6e6",
            borderRadius: "0.75rem",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          <img
            src="/image/panir-pro2.jpg"
            alt=""
            onClick={() => {
              setindexOfImage(1);
              slideTo(1);
            }}
          />
        </Box>
        <Box
          sx={{
            height: "5.625rem",
            width: "5.625rem",
            border: "1px solid #e6e6e6",
            borderRadius: "0.75rem",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          <img
            src="/image/panir-pro3.jpg"
            alt=""
            onClick={() => {
              setindexOfImage(2);
              slideTo(2);
            }}
          />
        </Box>
        <Box
          sx={{
            height: "5.625rem",
            width: "5.625rem",
            border: "1px solid #e6e6e6",
            borderRadius: "0.75rem",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          <img
            src="/image/panir-pro4.jpg"
            alt=""
            onClick={() => {
              setindexOfImage(3);
              slideTo(3);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #e6e6e6",
          borderRadius: "0.75rem",
          width: "28.75rem",
          /*  marginBottom: "1rem", */
          padding: "0.1875rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setSwiper}
          onSlideChange={(e) => {
            setindexOfImage(e.activeIndex);
            setshowThumbnail({});
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/image/panir-pro.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/panir-pro2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/panir-pro3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/panir-pro4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
