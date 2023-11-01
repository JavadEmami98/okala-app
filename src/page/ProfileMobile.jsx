import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Box } from "@mui/material";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

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
                <PersonOutlineOutlinedIcon />
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
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: "rgb(2, 160, 164)" }}
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
                <AssignmentOutlinedIcon sx={{ color: "rgb(2, 160, 164)" }} />
                <p className="text-[14px]"> سفارش‌های من </p>
              </div>
              <NavigateBeforeOutlinedIcon
                sx={{ color: "rgb(104, 104, 104)" }}
              />
            </div>
          </li>
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
            <div className="flex items-center justify-between w-full p-2">
              <div className="flex items-center gap-2">
                <FmdGoodOutlinedIcon sx={{ color: "rgb(2, 160, 164)" }} />
                <p className="text-[14px]"> آدرس‌های من </p>
              </div>
              <NavigateBeforeOutlinedIcon
                sx={{ color: "rgb(104, 104, 104)" }}
              />
            </div>
          </li>
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
            <div className="flex items-center justify-between w-full p-2">
              <div className="flex items-center gap-2">
                <LocalOfferOutlinedIcon sx={{ color: "rgb(2, 160, 164)" }} />
                <p className="text-[14px]">کدهای تخفیف من </p>
              </div>
              <NavigateBeforeOutlinedIcon
                sx={{ color: "rgb(104, 104, 104)" }}
              />
            </div>
          </li>
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
            <div className="flex items-center justify-between w-full p-2">
              <div className="flex items-center gap-2">
                <CallOutlinedIcon sx={{ color: "rgb(2, 160, 164)" }} />
                <p className="text-[14px]"> تماس با پشتیبانی </p>
              </div>
              <NavigateBeforeOutlinedIcon
                sx={{ color: "rgb(104, 104, 104)" }}
              />
            </div>
          </li>
          <li className="hover:bg-grey-50 border-b border-[rgba(248, 248, 248, 1)] py-4 px-3">
            <div className="flex items-center justify-between w-full p-2">
              <div className="flex items-center gap-2">
                <LogoutOutlinedIcon sx={{ color: "rgb(240, 20, 54)" }} />
                <p className="text-[14px]"> خروج از حساب </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileMobile;
