import React from "react";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

function CartFactorSwiper() {
  return (
    <div>
      <div className="flex-grow h-[86px] md:h-[86px] min-w-[203px] w-full m-1 px-2 border-[1px] border-gray-200  bg-white rounded-lg flex flex-row items-center cursor-pointer box-border z-10 relative overflow-hidden">
        <div className="flex h-[42px] w-[42px]">
          <img
            src="https://cdn.okala.com/media/index/Product/133652/500/500"
            alt=""
            className="w-[42px] h-[42px]"
          />
        </div>
        <div className="pr-3">
          <span className="text-xs font-normal w-full text-right text-gray-800 flex-shrink-0 line-clamp-2">
            نوشیدنی انگور قرمز گازدار پت یک لیتری ساندیس
          </span>
          <div className="flex flex-col select-none !items-start h-full">
            <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through pt-1">240,000</p>
            <div className="flex items-center">
                <p className="text-base md:text-lg font-bold text-gray-900 leading-7">193,000</p>
                <span className="text-xs font-normal text-gray-800 mr-1">ریال</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full mr-[2px]">
              
<ControlPointOutlinedIcon sx={{width:"36px",height:"36px",color:"#de082e"}}/>
                
        </div>
      </div>
    </div>
  );
}

export default CartFactorSwiper;
