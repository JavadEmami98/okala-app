import { Box } from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import ProfileMobile from "./ProfileMobile";
import { BsPerson } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import TabProfile from "../component/TabProfile/TabProfile";

function Profile() {
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
        <ProfileMobile />
      </Box>
      <div className="container lg:block hidden">
        <div className="flex mt-6 mb-20 ">
          {/* Right */}
          <div className="sticky pb-20 top-28 min-w-[308px]">
            <Box>
              <Box
                sx={{
                  padding: "12px",
                  boxShadow: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage:
                      "url('https://okala.com/static/images/siteImages/backgrounds/profileBackground.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="flex items-center cursor-pointer justify-between w-full py-[16px] px-[12px] h-[82px] rounded-[13px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center ml-3">
                        <Box
                          component={BsPerson}
                          sx={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <p className="text-[16px] text-[#e0f2f4] text-start">
                          امین بابایی
                        </p>
                        <h2 className="text-[20px] text-[#ffffff]">
                          09129123355
                        </h2>
                      </div>
                    </div>
                  </div>
                  <NavigateBeforeOutlinedIcon sx={{ color: "#fff" }} />
                </Box>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center">
                    <Box
                      component={CiWallet}
                      sx={{
                        color: "rgb(2, 160, 164)",
                        width: "24px",
                        height: "24px",
                      }}
                    />

                    <p className="text-[14px]">کیف پول</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-base">0</p>
                    <p className="text-xs">ریال</p>
                  </div>
                </div>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: "0px 2px 8px 1px rgba(116, 68, 68, 0.04)",
                mt: "16px",
                borderRadius: "12px",
                backgroundColor: "#fff",
              }}
            >
              <ul className="p-1">
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={CgNotes}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> سفارش‌های من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={HiOutlineLocationMarker}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> آدرس‌های من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={CiDiscount1}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />

                      <p className="text-base">کدهای تخفیف من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={IoCallOutline}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> تماس با پشتیبانی </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={IoLogOutOutline}
                        sx={{
                          color: "rgb(240, 20, 54)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> خروج از حساب </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Box>
          </div>
          {/* Left */}
          <div className="mr-6 w-full">
            <Box
              sx={{
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)",
                backgroundColor: "#fff",
                minHeight: "550px",
                width: "100%",
                height: "100%",
              }}
              className="w-full"
            >
              <div className="flex items-center mb-4">
                <div className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[16px] ml-[16px]"></div>
                <h6 className="text-lg font-medium text-gray-900">
                  تماس با پشتیبانی
                </h6>
              </div>
              <TabProfile />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
