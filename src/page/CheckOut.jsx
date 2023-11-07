import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import EastIcon from "@mui/icons-material/East";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { CiDiscount1 } from "react-icons/ci";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function CheckOut() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("پرداخت آنلاین");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
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
              تایید آدرس و پرداخت سفارش
            </div>
          </div>
        </Box>
      </Box>
      <div className="container">
        <div className=" lg:mt-6">
          <div className="hidden lg:flex items-center w-full">
            <Button
              variant="text"
              sx={{ padding: "6px 8px", borderRadius: "10px" }}
            >
              <EastOutlinedIcon sx={{ color: "black" }} />
              <p className="mr-4 text-sm font-medium text-gray-600">
                بازگشت به سبد خرید
              </p>
            </Button>
          </div>
        </div>
        <div className="flex flex-row lg:mt-4 lg:mb-32">
          {/* Right */}
          <div className="w-full lg:w-8/12">
            <div className="flex flex-col flex-grow gap-3">
              <div className="bg-white rounded-xl shadow p-6 lg:block hidden">
                <div className="flex items-center mb-8">
                  <div className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[16px] ml-[8px]"></div>
                  <h6 className="text-base font-medium text-gray-900">
                    آدرس تحویل سفارش
                  </h6>
                </div>
                <div className="flex">
                  <div className="flex pr-6">
                    <div className="flex flex-col flex-grow">
                      <span className="text-base font-normal text-gray-900">
                        <span className="font-bold">مشهد</span>- سید رضی 46 پلاک
                        ۳۱۳
                      </span>
                      <span className="text-lg text-start font-normal text-gray-600 mt-4">
                        09015427057
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 mt-auto">
                  <Button
                    variant="outlined"
                    sx={{
                      padding: "5px 15px",
                      fontSize: "1rem",
                      borderRadius: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      height: "39.6px",
                    }}
                  >
                    <PiPencilSimpleLineBold style={{ color: "#363636" }} />
                    <span className="text-base font-normal text-gray-900 mr-2 ml-1">
                      ویرایش
                    </span>
                  </Button>
                </div>
              </div>
              <div className="bg-white shadow mb-1 mt-2 px-4 lg:hidden">
                <div className="flex flex-col mt-2">
                  <div className="flex items-center mb-4">
                    <p className="text-sm font-normal text-gray-800 line-clamp-2 leading-6">
                      <span className="text-sm font-medium text-gray-900">
                        محل تحویل:
                      </span>
                      <span class="font-medium">مشهد</span>- سید رضی 46 پلاک ۳۱۳
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-2 pb-4">
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "5px 15px",
                        fontSize: "1rem",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        height: "36px",
                      }}
                    >
                      <PiPencilSimpleLineBold style={{ color: "#363636" }} />
                      <span className="text-sm font-normal text-gray-800 mr-2">
                        ویرایش
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white flex items-center rounded-xl shadow gap-2 lg:p-6 px-[4px] py-2">
                <AccessTimeOutlinedIcon
                  sx={{ p: { lg: "0px", md: "2px", xs: "2px", sm: "2px" } }}
                />
                <div className="flex flex-grow justify-between items-center">
                  <p className="lg:text-base text-sm font-medium text-gray-800">
                    تحویل دوشنبه 1402/8/15 ساعت 20 - 21
                  </p>
                  <Button
                    variant="text"
                    sx={{
                      padding: "6px 8px",
                      fontSize: "14px",
                      borderRadius: "10px",
                      height: "36.6px",
                      display: {
                        lg: "block",
                        md: "none",
                        xs: "none",
                        sm: "none",
                      },
                    }}
                  >
                    <span className="mr-2 text-sm font-medium text-teal-600">
                      تغییر زمان تحویل
                    </span>
                    <KeyboardArrowLeftOutlinedIcon sx={{ color: "#008684" }} />
                  </Button>
                  <KeyboardArrowLeftOutlinedIcon
                    sx={{
                      color: "rgba(143, 143, 143, 1)",
                      display: {
                        lg: "none",
                        md: "block",
                        xs: "block",
                        sm: "block",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex lg:hidden items-center justify-between w-full px-4 py-2 mb-1 bg-white shadow">
                <div className="flex items-center">
                  <span className="relative flex items-center justify-center w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC4E53] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f01436]"></span>
                  </span>
                  <p className="mr-3 text-sm font-medium text-gray-800">
                    کد تخفیف دارید؟
                  </p>
                </div>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: "64px",
                    height: "36.5px",
                    backgroundColor: "#43A143",
                    "&:hover": { backgroundColor: "#43A143" },
                    padding: "6px 16px",
                    borderRadius: "10px",
                    fontSize: "1rem",
                  }}
                >
                  <CiDiscount1 style={{ width: "22px", height: "22px" }} />
                  <span className="mr-2 text-sm">وارد کردن</span>
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center mb-8">
                  <div className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[16px] ml-[8px]"></div>
                  <h6 className="text-base font-medium text-gray-900">
                    شیوه پرداخت
                  </h6>
                </div>
                <FormControl sx={{ width: "100%" }}>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                  >
                    <FormControlLabel
                      value="female"
                      className="w-full flex flex-row-reverse justify-between !ml-4 my-3 rounded-[8px] min-h-[72px]"
                      label="پرداخت آنلاین"
                      control={<Radio />}
                    />

                    <FormControlLabel
                      value="male"
                      className="w-full flex flex-row-reverse justify-between !ml-4 my-3 rounded-[8px] min-h-[72px]"
                      control={<Radio />}
                      label="اعتباری"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          {/* Left */}
          <div className="hidden md:hidden lg:block w-5/12 lg:w-4/12">
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
                <div className="flex items-center justify-between w-full p-2 mt-4 rounded-lg bg-gray-50 mb-9">
                  <div className="flex items-center">
                    <CiDiscount1 style={{ height: "22px", width: "22px" }} />
                    <p className="mr-2 text-sm font-normal text-gray-800">
                      کد تخفیف دارید؟
                    </p>
                  </div>
                  <Button
                    variant="outlined"
                    sx={{
                      px: "16px",
                      py: "8px",
                      fontSize: "14px",
                      color: "#f01436",
                      border: "1px solid #e6e6e6",
                      borderRadius: ".375rem",
                      ":hover": { border: "1px solid #e6e6e6" },
                    }}
                  >
                    ثبت کد تخفیف
                  </Button>
                </div>
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
        <footer>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              },
              pt: "8rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100%",
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
                پرداخت و ثبت نهایی
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
                  <span className="text-sm font-normal text-gray-600">
                    {" "}
                    ريال
                  </span>
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
                        <span className="text-sm font-medium text-gray-900">
                          سود شما از این خرید
                        </span>
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
                        پرداخت و ثبت نهایی
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
        </footer>
      </div>
    </>
  );
}

export default CheckOut;
