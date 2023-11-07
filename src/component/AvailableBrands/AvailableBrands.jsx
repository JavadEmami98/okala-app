import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Checkbox, Collapse } from "@mui/material";
import { FiSearch } from "react-icons/fi"

function AvailableBrands() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className="mb-3 rounded-xl p-4 max-h-[280px] min-h-[54px] flex flex-col transition-all duration-300"
        style={{ boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px" }}
      >
        <div
          onClick={handleClick}
          className="h-[33px] flex justify-between items-center mb-3 relative"
        >
          <p className="border-r-4 border-[#02a0a4] border-opacity-70 pr-1 text-sm font-medium">
            برندهای موجود
          </p>
          {open ? (
            <ExpandLess sx={{ cursor: "pointer" }} />
          ) : (
            <ExpandMore sx={{ cursor: "pointer" }} />
          )}
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="px-3">
            <div className="relative mb-2 px-3 border border-gray-400 rounded-lg py-3">
              <input
                type="text"
                name=""
                id=""
                className="pr-4"
                placeholder="... جستجوی نام برند "
              />
              <FiSearch
                sx={{
                  position: "absolute",
                  top: 13,
                  right: 3,
                  color: "rgb(54, 54, 54)",
                }}
              />
            </div>
            <div className="flex items-center mr-4">
              <Checkbox sx={{ padding: "16px !important" }} />
              <p className="text-[.875rem]">گلرنگ</p>
            </div>
            <div className="flex items-center mr-4">
              <Checkbox sx={{ padding: "16px !important" }} />
              <p className="text-[.875rem]">دامداران</p>
            </div>
            <div className="flex items-center mr-4">
              <Checkbox sx={{ padding: "16px !important" }} />
              <p className="text-[.875rem]">چی توز</p>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default AvailableBrands;
