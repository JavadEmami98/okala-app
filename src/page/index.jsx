import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import BottomNav from "../component/layout/footer/BottomNav";
import Footer from "../component/layout/footer/Footer";
import { Box } from "@mui/material";
import HeaderMobile from "../component/layout/header/HeaderMobile";
import SearchBar from "../component/SearchBar/SearchBar";
import Swiper1 from "../component/Swiper1/Swiper1";
import Swiper2 from "../component/Swiper2/Swiper2";
import SwiperProduct from "../component/SwiperProduct/SwiperProduct";
import Shops from "../component/Shops/Shops";
import Grouping from "../component/Grouping/Grouping";

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

function Index() {
  return (
    <div>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <HeaderOkala />
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <HeaderMobile />
      </Box>
      <main>
        <div className="container">
          <SearchBar />
          <Swiper1 />
          <Swiper2 />
          <SwiperProduct title={"کالاهای روز و تازه"} data={item1} />
          <SwiperProduct title={" محصولات گیاهخواری  "} data={item1} />
          <SwiperProduct title={"  خرید به‌صرفه  "} data={item1} />
          <img
            src="https://cdn.okala.com/Media/Index_v2/Slider/500494"
            alt=""
            className="rounded-[0.5rem]"
          />
          <Shops />
          <Grouping />
          <img
            src="https://cdn.okala.com/Media/Index_v2/Slider/500504"
            alt=""
            className="rounded-[0.5rem] mb-5"
          />
        </div>
      </main>
      <footer>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <BottomNav />
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Footer />
        </Box>
      </footer>
    </div>
  );
}

export default Index;
