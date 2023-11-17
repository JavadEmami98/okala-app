import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import { Box, Button, Drawer, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Footer from "../component/layout/footer/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FactorSwiper from "../component/FactorSwiper/FactorSwiper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ModalDeliveryTime from "../component/ModalDeliveryTime/ModalDeliveryTime";

function Factor() {
  const [open, setOpen] = React.useState(false);
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
        <Box
          sx={{
            boxShadow:
              "rgba(22, 22, 22, 0.04) 0px 2px 4px -1px, rgba(22, 22, 22, 0.04) 0px 4px 8px -1px",
          }}
          className="px-[10px] h-[56px] flex items-center justify-start"
        >
          <EastIcon sx={{ width: "20px", height: "20px" }} />
          <div className="pr-4">
            <div className="flex items-center gap-2 font-semibold">
              سبد خرید
              <div className="flex items-center justify-center rounded-[50%] bg-[#02a0a4] text-[#fff] text-[12px] min-w-[20px] py-[2px] px-[6px]">
                2
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <main className="container">
        <div className=" w-full flex lg:mt-9 md:mt-9 h-fit mb-32">
          {/* Right */}
          <div className="w-full lg:w-8/12">
            <div className="bg-white rounded-xl shadow flex-grow">
              <div className="flex items-center px-6 py-6">
                <div className="flex items-center w-full">
                  <img
                    src="/image/ok.png"
                    alt=""
                    loading="lazy"
                    className="h-[68px] w-[68px]"
                  />
                  <h6 className="text-base text-start font-medium text-gray-900 mr-4 w-full">
                    افق کوروش امامت 56
                  </h6>
                  <div className="flex md:hidden lg:hidden justify-end items-start mb-9 w-[30%]">
                    <DeleteOutlineIcon />
                  </div>
                </div>
              </div>
              <div className="px-6">
                <div className="w-full flex py-3 md:py-4  border-b border-gray-100">
                  <div className="flex-shrink-0 ml-2 md:ml-4 cursor-pointer">
                    <img
                      src="/image/kalbas.png"
                      alt=""
                      loading="lazy"
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
          <div className="hidden md:hidden lg:block w-5/12 lg:w-4/12">
            <div className="p-4 mr-4 bg-white shadow rounded-xl">
              <div className="flex items-center mb-4">
                <Box
                  sx={{
                    borderLeft: "4px solid #7cc8cc",
                    borderRadius: "6.25rem",
                    height: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
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
                    <Typography variant="subtitle2">
                      سود شما از این خرید
                    </Typography>
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
                <ModalDeliveryTime />
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
          <div className="flex items-center justify-between px-4 py-3">
            <Button
              variant="contained"
              sx={{
                width: "fit",
                fontSize: "14px",
                height: "36.5px",
                backgroundColor: "#f01436",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#f01436" },
                boxShadow: "none !important",
              }}
            >
              انتخاب زمان تحویل
            </Button>
            <div
              onClick={() => setOpen(true)}
              className="flex flex-col cursor-pointer select-none"
            >
              <div className="flex items-center">
                <span className="text-xs font-normal text-gray-800 ml-1">
                  جزئیات فاکتور
                </span>

                {open ? <ExpandMore /> : <ExpandLess />}
              </div>
              <div className="flex gap-2">
                <span className="text-base font-medium text-gray-900">
                  ۵۶۲٬۶۰۰
                </span>
                <span className="text-sm font-normal text-gray-600"> ريال</span>
              </div>
            </div>
            <Drawer
              anchor={"bottom"}
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className="bg-white fixed bottom-0 w-full shadow-xl overflow-y-hidden rounded-t-xl pt-1 h-fit">
                <div className="flex flex-col overflow-y-hidden">
                  <div className="flex justify-between items-center py-4 px-3 border-b border-gray-100 border-dashed">
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        مجموع خرید شما
                      </span>
                      <span class="text-sm font-normal text-gray-500 mr-1">
                        (1 کالا)
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        ۵۳۵٬۰۰۰
                      </span>
                      <span class="text-sm font-normal text-gray-600">
                        ريال
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 px-3 border-b border-gray-100 border-dashed">
                    <div className="flex">
                      <Typography variant="body2">
                        سود شما از این خرید
                      </Typography>
                    </div>
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        214٬۰۰۰
                      </span>
                      <span class="text-sm font-normal text-gray-600">
                        ريال
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 px-3 border-b border-gray-100 border-dashed">
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        هزینه ارسال
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-base font-medium text-gray-900">
                        رایگان
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 px-3">
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        مبلغ قابل پرداخت
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-900">
                        321٬۰۰۰
                      </span>
                      <span class="text-sm font-normal text-gray-600">
                        ريال
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center  px-4 py-3">
                    <Button
                      variant="contained"
                      sx={{
                        width: "fit",
                        fontSize: "14px",
                        height: "36.5px",
                        backgroundColor: "#f01436",
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#f01436" },
                        boxShadow: "none !important",
                      }}
                    >
                      انتخاب زمان تحویل
                    </Button>
                    <div className="flex flex-col cursor-pointer select-none">
                      <div className="flex items-center">
                        <span className="text-xs font-normal text-gray-800 ml-1">
                          جزئیات فاکتور
                        </span>

                        <ExpandMore />
                      </div>
                      <div className="flex gap-2">
                        <span className="text-base font-medium text-gray-900">
                          ۵۶۲٬۶۰۰
                        </span>
                        <span className="text-sm font-normal text-gray-600">
                          {" "}
                          ريال
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
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
