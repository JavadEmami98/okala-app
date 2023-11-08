import React from "react";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Box, Typography } from "@mui/material";

function CartFactorSwiper() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "86px",
          flexGrow: 1,
          borderRadius: "8px",
          alignItems: "center",
          cursor: "pointer",
          overflow: "hidden",
          paddingX: "8px",
          margin: "4px",
          border: "1px solid #ccc",
          minWidth: "203px",
          width: "100%",
          bgcolor: "#fff",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Box sx={{ display: "flex", height: "42px", width: "42px" }}>
          <img
            src="/image/sandis.jpg"
            alt=""
            loading="lazy"
            className="w-[42px] h-[42px]"
          />
        </Box>
        <Box sx={{ paddingRight: "12px" }}>
          <span className="text-xs font-normal w-full text-right text-gray-800 flex-shrink-0 line-clamp-2">
            نوشیدنی انگور قرمز گازدار پت یک لیتری ساندیس
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Typography
              sx={{ paddingTop: "4px", fontSize: "14px" }}
              className=" md:text-[.875rem] font-normal text-gray-500 leading-6 line-through"
            >
              240,000
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p className="text-[1rem] md:text-[1.125rem] font-bold text-gray-900 leading-7">
                193,000
              </p>
              <Typography
                sx={{ marginRight: "4px" }}
                className="text-[0.75rem] font-normal text-gray-800"
              >
                ریال
              </Typography>
            </Box>
          </Box>
        </Box>
        <div className="flex items-center justify-center h-full mr-[2px]">
          <ControlPointOutlinedIcon
            sx={{ width: "36px", height: "36px", color: "#de082e" }}
          />
        </div>
      </Box>
    </Box>
  );
}

export default CartFactorSwiper;
