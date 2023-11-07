import React from "react";
import { TbBuildingStore } from "react-icons/tb";
import { GrAdd } from "react-icons/gr";

function CartSwiper({ image, oldprice, price, offer, description }) {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden box-border border-collapse border-gray-200 cursor-pointer z-10 pt-4 !h-[280px] border rounded-lg">
      <div className="absolute top-28 right-3 z-[11]">
        <div
          className="flex justify-center items-center h-9 !rounded-full hover:bg-white bg-white shadow-sm 
        "
          style={{
            width: " 36px",
            padding: "6px 8px",
            minWidth: "36x",
            border: "1px solid #de082e",
          }}
        >
          <GrAdd
            style={{
              width: "26px",
              height: "26px",
              color: "red !important",
              fill: "red !important",
            }}
          />
        </div>
      </div>
      <div className="w-32 h-32">
        <img src={image} alt="" />
      </div>
      <div className="w-full flex justify-between mt-2 h-11 px-3">
        <div className="flex flex-col select-none items-start h-full">
          <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through pt-1">
            {oldprice}
          </p>
          <div className="flex items-center">
            <p className="text-base md:text-lg font-bold text-gray-900 leading-7">
              {price}
            </p>
            <span className="text-xs font-normal text-gray-800 mr-1">ریال</span>
          </div>
        </div>
        <div className="flex justify-center w-[32px] h-[24px] items-center bg-[#f01436] rounded-[100px] select-none  mt-4">
          <span className="text-xs font-medium text-white leading-4">
            {offer}
          </span>
        </div>
      </div>
      <div className="w-full h-9 flex-shrink-0 text-right text-xs font-medium md:font-normal text-gray-700 line-clamp-2 mt-2 mb-[6px] px-3">
        {description}
      </div>
      <div className="flex items-center w-full h-8 px-3 py-2 border-t rounded-b-lg border-grey-200 bg-gray-50 ">
        <TbBuildingStore
          style={{ width: "16px", height: "16px", color: "#686868" }}
        />
        <p className="whitespace-nowrap text-[10px]  !font-medium !text-gray-600 pr-1 !mt-1">
          افق کوروش
        </p>
      </div>
    </div>
  );
}

export default CartSwiper;
