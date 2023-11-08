import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Box } from "@mui/material";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { CgNotes } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

function ProfileMobile() {
  return (
    <div>
      <div className="flex items-center pr-[10px] pl-4 h-[56px] gap-4">
        <EastOutlinedIcon />
        <p className="text-[14px] font-semibold">پروفایل</p>
      </div>
      <Box
        sx={{ boxShadow: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)" }}
        className="p-3  rounded-[12px]"
      >
        <Box
          sx={{
            backgroundImage:
              "url('https://okala.com/static/images/siteImages/backgrounds/profileBackground.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="flex items-center justify-between w-full py-[16px] px-[12px] h-[72px] rounded-[13px]"
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
                <h2 className="text-[20px] text-[#ffffff]">09129123355</h2>
              </div>
            </div>
          </div>
          <NavigateBeforeOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
        <div className="flex justify-between items-center mt-5">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 8px",
              width: "100%",
            }}
          >
            <div className="flex items-center gap-2">
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
          </Box>
        </div>
      </Box>
      <div className="mt-4">
        <ul className="p-1">
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
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
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
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
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
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
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
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
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
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
      </div>
    </div>
  );
}

export default ProfileMobile;
