import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import { Box, Button } from "@mui/material";
import HeaderMobile from "../component/layout/header/HeaderMobile";
import BottomNav from "../component/layout/footer/BottomNav";
import Footer from "../component/layout/footer/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FactorSwiper from "../component/FactorSwiper/FactorSwiper";

function Factor() {
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
      <main className="container">
        <div className=" w-full flex mt-9 h-fit mb-32">
          {/* Right */}
          <div className="w-7/12 lg:w-8/12">
            <div className="bg-white rounded-xl shadow flex-grow">
              <div className="flex items-center px-6 py-6">
                <div className="flex items-center">
                  <img
                    src="/image/ok.png"
                    alt=""
                    className="h-[68px] w-[68px]"
                  />
                  <h6 className="text-base font-medium text-gray-900 mr-4">
                    افق کوروش امامت 56
                  </h6>
                </div>
              </div>
              <div className="px-6">
                <div className="w-full flex py-3 md:py-4  border-b border-gray-100">
                  <div className="flex-shrink-0 ml-2 md:ml-4 cursor-pointer">
                    <img
                      src="/image/kalbas.png"
                      alt=""
                      className="h-[92px] w-[92px]"
                    />
                  </div>
                  <div className="flex-grow h-[90px]">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between">
                        <p className="text-xs md:text-sm font-medium text-gray-800 leading-5 line-clamp-2 select-none">
                          شیر پر چرب 1 لیتری دومینو
                        </p>
                        <div className="flex justify-center items-center bg-[#f01436] rounded-md select-none flex-shrink-0 mr-2 h-[24px] w-[42px]">
                          <span className="text-xs font-medium text-white leading-4">
                            16%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="p-0 h-9 flex items-center justify-between rounded-[80px] bg-white border border-red-700 min-w-[36px]">
                          <AddOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                          <div className="flex items-center justify-center flex-1 quantity">
                            <p className="text-lg font-medium select-none text-gray-900">
                              1
                            </p>
                          </div>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-end select-none mr-2">
                          <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through ">
                            ۳۹۰٬۰۰۰
                          </p>
                          <div className="flex items-center">
                            <p className="text-base md:text-lg font-bold text-gray-900 leading-7 ">
                              ۳۲۷٬۶۰۰
                            </p>
                            <span className="text-xs font-normal text-gray-800 mr-1">
                              ریال
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex py-3 md:py-4  ">
                  <div className="flex-shrink-0 ml-2 md:ml-4 cursor-pointer">
                    <img
                      src="/image/kalbas.png"
                      alt=""
                      className="h-[92px] w-[92px]"
                    />
                  </div>
                  <div className="flex-grow h-[90px]">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between">
                        <p className="text-xs md:text-sm font-medium text-gray-800 leading-5 line-clamp-2 select-none">
                          شیر پر چرب 1 لیتری دومینو
                        </p>
                        <div className="flex justify-center items-center bg-[#f01436] rounded-md select-none flex-shrink-0 mr-2 h-[24px] w-[42px]">
                          <span className="text-xs font-medium text-white leading-4">
                            16%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="p-0 h-9 flex items-center justify-between rounded-[80px] bg-white border border-red-700 min-w-[36px]">
                          <AddOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                          <div className="flex items-center justify-center flex-1 quantity">
                            <p className="text-lg font-medium select-none text-gray-900">
                              1
                            </p>
                          </div>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-end select-none mr-2">
                          <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through ">
                            ۳۹۰٬۰۰۰
                          </p>
                          <div className="flex items-center">
                            <p className="text-base md:text-lg font-bold text-gray-900 leading-7 ">
                              ۳۲۷٬۶۰۰
                            </p>
                            <span className="text-xs font-normal text-gray-800 mr-1">
                              ریال
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-8 h-full border-gray-100 w-full">
                <Box
                  sx={{
                    backgroundImage: "url('/image/bgswiper.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "-60px",
                    backgroundSize: "cover",
                    px: "8px",
                    mt: "24px",
                    pt: "24px",
                    pb: "48px",
                  }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="flex justify-center items-center flex-shrink-0 h-3 w-3 relative mx-3 pt-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC4E53] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f01436]"></span>
                      </span>
                      <p className="text-lg font-medium text-gray-800 line-clamp-1">
                        یادت نره
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <FactorSwiper />
                  </div>
                </Box>
              </div>
            </div>
          </div>
          {/* Left */}
          <div className="w-5/12 lg:w-4/12">
            <div className="p-4 mr-4 bg-white shadow rounded-xl">
              <div className="flex items-center mb-4">
                <hr className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[16px] ml-[10px]" />
                <h6 className="text-sm font-medium text-gray-900">
                  جزئیات فاکتور
                </h6>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-900">
                      مجموع خرید شما
                    </span>
                    <span className="mr-1 text-sm font-normal text-gray-500">
                      (3 کالا)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      ۹۵۶٬۴۶۰
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      ريال
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-900">
                      سود شما از این خرید
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base font-medium text-gray-900">
                      ۱۵۵٬۳۸۴
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      ريال
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-900">
                      هزینه ارسال
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      رایگان
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      مبلغ قابل پرداخت
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base font-medium text-gray-900">
                      ۸۰۱٬۰۷۶
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      ريال
                    </span>
                  </div>
                </div>
                <div className="w-full h-6"></div>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    height: "48px",
                    backgroundColor: "#f01436",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#f01436" },
                    boxShadow: "none !important",
                  }}
                >
                  انتخاب زمان تحویل
                </Button>
              </div>
            </div>
          </div>
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

export default Factor;
