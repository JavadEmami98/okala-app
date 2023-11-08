import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HamMenu from "./HamMenu";
import LocationDialog from "./LocationDialog";
import Account from "./Account";
import TopHeader from "./TopHeader";

function HeaderOkala() {
  return (
    <>
      <TopHeader />
      <div className="sticky flex items-center justify-between border-b border-[#e6e6e6] shadow-[0_4px_16px_rgb(22,22,22,.08)]">
        <div className="container flex py-6 items-center justify-between">
          <div className="flex items-center">
            <HamMenu />
            <img
              src="/image/logo-okala-h.svg"
              alt=""
              loading="lazy"
              className="ml-10 cursor-pointer"
            />
            <div className="flex items-center rounded-[8px] bg-[#f8f8f8] px-[8px] py-[12px] cursor-pointer">
              <StorefrontOutlinedIcon sx={{ width: "20px", height: "20px" }} />
              <p className="text-sm text-[#363636] pr-1"> مشاهده فروشگاه‌ها</p>
            </div>
          </div>
          <LocationDialog />
          <div>
            <div className="flex items-center">
              <Account />
              <div className="border-l border-[#0000001f] mt-1 mr-2">
                &nbsp;{" "}
              </div>
              <div className="flex items-center px-[8px] py-[6px] rounded-[10px] hover:bg-[#f8f8f8] mr-4">
                <ShoppingCartOutlinedIcon />
                <div className="flex flex-col items-start pr-3">
                  <p className="text-sm	font-medium text-grey-800 whitespace-nowrap">
                    سبد خرید
                  </p>
                  <p className="font-medium text-xs whitespace-nowrap">
                    از چند فروشگاه
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderOkala;
