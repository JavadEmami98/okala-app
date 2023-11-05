import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import EastIcon from "@mui/icons-material/East";
import { Box, Button } from "@mui/material";
import BottomNav from "../component/layout/footer/BottomNav";
import Footer from "../component/layout/footer/Footer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function PageCart() {
  return (
    <div>
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
        <HeaderOkala />
      </Box>
      {/*  <Box
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
      </Box> */}
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
        <Box
          sx={{
            boxShadow:
              "rgba(22, 22, 22, 0.04) 0px 2px 4px -1px, rgba(22, 22, 22, 0.04) 0px 4px 8px -1px",
          }}
          className=" px-[10px] h-[56px] flex items-center justify-start"
        >
          <EastIcon sx={{ width: "20px", height: "20px" }} />
          <div className="pr-4">
            <div className="flex items-center gap-2 font-semibold">
              سبدهای خرید شما
              <div className="flex items-center justify-center rounded-[50%] bg-[#02a0a4] text-[#fff] text-[12px] min-w-[20px] py-[2px] px-[6px]">
                2
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <div className="container">
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
          {" "}
          <div className="flex flex-col w-full p-6 bg-white shadow rounded-xl mt-9 mb-3">
            <div className="flex items-center">
              <p className="mr-2 text-base font-medium text-gray-900">
                سبدهای خرید شما
              </p>
              <p className="mr-2 text-xs font-medium text-gray-600">(2 عدد)</p>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5 py-6 mt-4">
              <div className="w-full flex flex-col md:border border-gray-300 md:rounded-lg gap-6 p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex justify-center items-center flex-shrink-0 border border-gray-100 rounded-lg">
                      <img
                        src="https://cdn.okala.com/media/logo/1"
                        alt=""
                        className="w-[48px] h-[48px]"
                      />
                    </div>
                    <h6 className="text-base font-medium text-gray-800">
                      افق کوروش معلم 33
                    </h6>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 cursor-pointer">
                    <DeleteOutlineIcon />
                  </div>
                </div>
                <div className="flex items-center select-none gap-2 overflow-x-auto">
                  <div className="w-12 h-12 flex justify-center items-center flex-shrink-0">
                    <img src="image/rob.jpg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      height: "40px",
                      border: "1px solid #afafaf",
                      borderRadius: "10px",
                      color: "#f01436",
                    }}
                  >
                    ادامه خرید
                    <ArrowBackIosNewIcon
                      sx={{ width: "16px", height: "16px", mr: "12px" }}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      height: "40px",
                      backgroundColor: "#f01436",
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#f01436" },
                      boxShadow: "none !important",
                    }}
                  >
                    تکمیل سفارش
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
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
        <div className="w-full flex flex-col gap-6 p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex justify-center items-center flex-shrink-0 border border-gray-100 rounded-lg">
                <img
                  src="https://cdn.okala.com/media/logo/1"
                  alt=""
                  className="w-[48px] h-[48px]"
                />
              </div>
              <h6 className="text-base font-medium text-gray-800">
                افق کوروش معلم 33
              </h6>
            </div>
            <div className="flex items-center justify-center w-6 h-6 cursor-pointer">
              <DeleteOutlineIcon />
            </div>
          </div>
          <div className="flex items-center select-none gap-2 overflow-x-auto">
            <div className="w-12 h-12 flex justify-center items-center flex-shrink-0">
              <img src="image/rob.jpg" alt="" />
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <Button
              variant="text"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                border: "1px solid #afafaf",
                borderRadius: "10px",
                color: "#f01436",
              }}
            >
              ادامه خرید
              <ArrowBackIosNewIcon
                sx={{ width: "16px", height: "16px", mr: "12px" }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                backgroundColor: "#f01436",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#f01436" },
                boxShadow: "none !important",
              }}
            >
              تکمیل سفارش
            </Button>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-50"></div>
        <div className="w-full flex flex-col gap-6 p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex justify-center items-center flex-shrink-0 border border-gray-100 rounded-lg">
                <img
                  src="https://cdn.okala.com/media/logo/1"
                  alt=""
                  className="w-[48px] h-[48px]"
                />
              </div>
              <h6 className="text-base font-medium text-gray-800">
                افق کوروش معلم 33
              </h6>
            </div>
            <div className="flex items-center justify-center w-6 h-6 cursor-pointer">
              <DeleteOutlineIcon />
            </div>
          </div>
          <div className="flex items-center select-none gap-2 overflow-x-auto">
            <div className="w-12 h-12 flex justify-center items-center flex-shrink-0">
              <img src="image/rob.jpg" alt="" />
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <Button
              variant="text"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                border: "1px solid #afafaf",
                borderRadius: "10px",
                color: "#f01436",
              }}
            >
              ادامه خرید
              <ArrowBackIosNewIcon
                sx={{ width: "16px", height: "16px", mr: "12px" }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                backgroundColor: "#f01436",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#f01436" },
                boxShadow: "none !important",
              }}
            >
              تکمیل سفارش
            </Button>
          </div>
        </div>
      </Box>
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

export default PageCart;
