import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Account() {
  return (
    <div>
      <div className="flex items-center px-[8px] py-[12.5px] ml-2 cursor-pointer rounded-[10px] hover:bg-[#f8f8f8]">
        <AccountCircleOutlinedIcon />
        <p className="text-sm font-medium text-grey-800 pr-2 whitespace-nowrap">
          پروفایل
        </p>
        <KeyboardArrowDownOutlinedIcon
          sx={{ width: "20px", height: "20px", ml: "4px" }}
        />
      </div>
    </div>
  );
}

export default Account;
