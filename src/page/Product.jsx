import { Box } from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import HeaderMobile from "../component/layout/header/HeaderMobile";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CartProduct from "../component/Cart/CartProduct";

const data = [
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

function Product() {
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
      <div className="container">
        <div className="text-start mb-4">
          <p className="text-gray-500 text-sm pt-3">94 کالا</p>
        </div>
        <section className="flex">
          {/* Right */}
          <div className="max-w-[324px] min-w-[280px] pl-4">
            <div className="sticky  top-28">
                <div className="mb-3 rounded-xl p-4 max-h-[280px] min-h-[54px] flex flex-col transition-all duration-300" style={{boxShadow:" rgba(22, 22, 22, 0.04) 0px 2px"}}>
                    <div className="h-[33px] flex justify-between items-center mb-3 relative">
                        <p className="border-r-4 border-[#02a0a4] border-opacity-70 pr-1 text-sm font-medium">
                        فیلترهای اعمال شده
                        </p>
                        <button><span className="text-xs text-red-600">
                            حذف همه</span></button>
                    </div>
                </div>
            </div>
          </div>
          {/* Left */}
          <div className="float-left mb-4 max-w-[calc(100% - 324px)]">
            <div className="w-full flex mb-4">
              <div className="flex items-center float-right ">
                <SwapVertIcon />
                <p className="pr-2 ">نمایش براساس</p>
              </div>
              <ul>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    className="
                        px-3 py-2 rounded-lg text-[#02a0a4] bg-[#02a0a40a]
                        "
                  >
                    پرفروشترین
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    className="
                        px-3 py-2 rounded-lg 
                        "
                  >
                    بیشترین تخفیف
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    className="
                        px-3 py-2 rounded-lg 
                        "
                  >
                    جدیدترین{" "}
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    className="
                        px-3 py-2 rounded-lg 
                        "
                  >
                    ارزانترین{" "}
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    className="
                        px-3 py-2 rounded-lg 
                        "
                  >
                    گرانترین{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            {data.map((item, index) => (
              <CartProduct  key={index} image={item.image}
              oldprice={item.oldprice}
              price={item.price}
              offer={item.offer}
              description={item.description} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
