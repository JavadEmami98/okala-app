import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box } from "@mui/material";

function CartProduct({ image, oldprice, price, offer, description }) {
  return (
    <>
      <div>
        <div className="relative w-full flex flex-col items-center bg-white box-border border-collapse border-gray-200 cursor-pointer z-10 pt-4 !h-[252px] border ">
          <div className="absolute top-28 right-3 z-[11]">
            {/*  <div className="h-9 !rounded-full hover: bg-white shadow-sm !border !border-red-700 #fff !text-red-600 
          jss162" style={{width:" 36px",padding:"6px 8px", minWidth: "36x",border: "1px solid #de082e"}}> + </div> */}
            <AddCircleOutlineOutlinedIcon
              sx={{ width: "36px", height: "36px", color: "#f01436" }}
            />
          </div>
          <Box sx={{ width: "8rem", height: "8rem" }}>
            <img src={image} alt="" loading="lazy" />
          </Box>
          <div className="w-full flex justify-between mt-2 h-11 px-3">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through pt-1">
                {oldprice}
              </p>
              <div className="flex items-center">
                <p className="text-base md:text-lg font-bold text-gray-900 leading-7">
                  {price}
                </p>
                <span className="text-xs font-normal text-gray-800 mr-1">
                  ریال
                </span>
              </div>
            </Box>
            <div className="flex justify-center w-[32px] h-[24px] items-center bg-[#f01436] rounded-[100px] select-none  mt-4">
              <span className="text-xs font-medium text-white leading-4">
                {offer}
              </span>
            </div>
          </div>
          <div className="w-full h-9 flex-shrink-0 text-right text-xs font-medium md:font-normal text-gray-700 line-clamp-2 mt-2 mb-[6px] px-3">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
