import { Box } from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import TollIcon from "@mui/icons-material/Toll";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import EastIcon from "@mui/icons-material/East";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Store() {
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
        <div className="w-full h-14 flex justify-between items-center px-4  ">
          <EastIcon />
          <div className="flex items-center">
            <HomeOutlinedIcon />
            <ShoppingCartOutlinedIcon sx={{ mr: "16px" }} />
          </div>
        </div>
      </Box>
      <div className="md:border-b md:border-gray-100 sm:max-w-7xl sm:my-0 sm:mx-auto max-h-[187px]">
        <div className="flex flex-col px-4 py-4 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center pb-4">
            <div className="flex justify-center items-center border border-gray-100 rounded-full  h-[80px] w-[80px]">
              <img src="/image/ok.png" alt="" className="h-[46px] w-[46px]" />
            </div>
            <div className="flex flex-col mr-1">
              <p className="text-base text-start md:text-lg text-gray-800 font-bold mr-3 whitespace-nowrap">
                امامت 56
              </p>
              <p className="text-sm font-normal text-gray-800 pt-2 mr-3 flex md:hidden items-center">
                حداقل سفارش :
                <span className="font-bold text-xs whitespace-nowrap pr-1">
                  500,000
                </span>
                <span className="font-normal text-base pr-1">ریال</span>
              </p>
            </div>
          </div>
          <div className="flex lg:justify-between md:justify-between justify-around items-center md:py-10">
            <div className="hidden md:flex md:items-center">
              <div className="flex flex-col items-center justify-center text-center border-l border-[#0000001f] md:pl-11 md:pr-11 line-clamp-1">
                <div className="flex">
                  <TollIcon sx={{ width: "20px", height: "20px" }} />
                  <p className="font-normal text-gray-700 whitespace-nowrap text-sm mb-3 pr-1">
                    حداقل سفارش
                  </p>
                </div>
                <div className="flex">
                  <span className="font-bold text-base whitespace-nowrap">
                    500,000
                  </span>
                  <span className="font-normal text-base pr-1">ريال</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:px-11">
              <div className="flex">
                <QueryBuilderOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                />
                <p className="font-normal text-gray-700 whitespace-nowrap text-sm mb-3 pr-1">
                  اولین بازه تحویل
                </p>
              </div>
              <span className="font-bold text-sm whitespace-nowrap">
                تحویل در 25 دقیقه
              </span>
            </div>
            <div
              className="border-l"
              style={{
                height: " 48px",
                width: "1px",
                color: "rgba(230, 230, 230, 1)",
              }}
            ></div>

            <div className="flex flex-col justify-center items-center   md:px-11">
              <div className="flex">
                <LocalShippingOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                />
                <p className="font-normal text-gray-700 whitespace-nowrap text-sm mb-3 pr-1">
                  هزینه ارسال
                </p>
              </div>
              <span className="text-green-800 font-bold text-sm">رایگان</span>
            </div>
            <div
              className="border-l"
              style={{
                height: " 48px",
                width: "1px",
                color: "rgba(230, 230, 230, 1)",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center md:px-11">
              <div className="flex">
                <StarBorderPurple500OutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                />
                <p className="font-normal text-gray-700 whitespace-nowrap text-sm mb-3 pr-1">
                  امتیاز
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-5 w-9 bg-green-50 rounded-md ">
                  <p className="font-bold text-sm md:text-base text-green-900">
                    0
                  </p>
                </div>
                <span className="text-gray-600 text-xs md:text-sm font-normal mr-1 whitespace-nowrap">
                  « 0 رأی»
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
