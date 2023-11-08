import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function Shops() {
  return (
    <div className="flex flex-col !px-4 !py-4 md:!py-6">
      <div className="flex flex-col items-start">
        <h5 className="text-base md:text-lg font-bold text-gray-950 leading-5 md:leading-6 mb-1 md:mb-2">
          3 فروشگاه در اطراف شما
        </h5>
        <div className="flex items-center">
          <FmdGoodOutlinedIcon
            sx={{ width: "20px", height: "20px", color: "#686868" }}
          />
          <p className="text-xs md:text-sm font-medium text-gray-600 line-clamp-1 mr-1 pl-2">
            مشهد، سید رضی 46 پلاک ۳۱۳
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center mt-4 md:mt-6">
        <div className="w-full flex items-center justify-center flex-wrap md:grid md:grid-cols-2 md:gap-3 md:mb-6">
          <div className="w-full md:col-span-1">
            <div className="overflow-hidden cursor-pointer flex items-center justify-between border border-gray-200 rounded-lg py-3 pr-3 pl-2 md:px-4 md:py-3 w-full mb-2 md:mb-0">
              <div className="flex items-center">
                <div className="flex justify-center items-center border border-gray-100 rounded-full h-[88px] w-[88px]">
                  <img
                    src="https://cdn.okala.com/Media/logo/1/200/200"
                    alt=""
                    loading="lazy"
                    className="h-[64px] w-[64px]"
                  />
                </div>
                <div className="flex flex-col mr-2.5 md:mr-3 items-start">
                  <h6 className="text-sm md:text-base font-bold text-gray-900 leading-5 line-clamp-1 mb-1.5 md:mb-3">
                    افق کوروش معلم 33
                  </h6>
                  <div className="flex items-center">
                    <div className="flex w-[fit-content] items-center h-6 md:h-8  py-[5px]">
                      <TwoWheelerOutlinedIcon
                        sx={{ width: "18px", height: "18px" }}
                      />
                      <p className="text-gray-700 whitespace-nowrap text-sm text-[10px] md:text-xs !font-bold  mr-1">
                        تحویل در 35 دقیقه
                      </p>
                      <span className="mx-[3px]"> | </span>
                      <span className="text-green-600 text-[12px]">رایگان</span>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowBackIosNewOutlinedIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  color: "rgb(175, 175, 175)",
                }}
              />
            </div>
          </div>
          <div className="w-full md:col-span-1">
            <div className="overflow-hidden cursor-pointer flex items-center justify-between border border-gray-200 rounded-lg py-3 pr-3 pl-2 md:px-4 md:py-3 w-full mb-2 md:mb-0">
              <div className="flex items-center">
                <div className="flex justify-center items-center border border-gray-100 rounded-full h-[88px] w-[88px]">
                  <img
                    src="https://cdn.okala.com/Media/logo/1/200/200"
                    alt=""
                    loading="lazy"
                    className="h-[64px] w-[64px]"
                  />
                </div>
                <div className="flex flex-col mr-2.5 md:mr-3 items-start">
                  <h6 className="text-sm md:text-base font-bold text-gray-900 leading-5 line-clamp-1 mb-1.5 md:mb-3">
                    افق کوروش معلم 33
                  </h6>
                  <div className="flex items-center">
                    <div className="flex w-[fit-content] items-center h-6 md:h-8  py-[5px]">
                      <TwoWheelerOutlinedIcon
                        sx={{ width: "18px", height: "18px" }}
                      />
                      <p className="text-gray-700 whitespace-nowrap text-sm text-[10px] md:text-xs !font-bold  mr-1">
                        تحویل در 35 دقیقه
                      </p>
                      <span className="mx-[3px]"> | </span>
                      <span className="text-green-600 text-[12px]">رایگان</span>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowBackIosNewOutlinedIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  color: "rgb(175, 175, 175)",
                }}
              />
            </div>
          </div>
          <div className="w-full md:col-span-1">
            <div className="overflow-hidden cursor-pointer flex items-center justify-between border border-gray-200 rounded-lg py-3 pr-3 pl-2 md:px-4 md:py-3 w-full mb-2 md:mb-0">
              <div className="flex items-center">
                <div className="flex justify-center items-center border border-gray-100 rounded-full h-[88px] w-[88px]">
                  <img
                    src="https://cdn.okala.com/Media/logo/1/200/200"
                    alt=""
                    loading="lazy"
                    className="h-[64px] w-[64px]"
                  />
                </div>
                <div className="flex flex-col mr-2.5 md:mr-3 items-start">
                  <h6 className="text-sm md:text-base font-bold text-gray-900 leading-5 line-clamp-1 mb-1.5 md:mb-3">
                    افق کوروش معلم 33
                  </h6>
                  <div className="flex items-center">
                    <div className="flex w-[fit-content] items-center h-6 md:h-8  py-[5px]">
                      <TwoWheelerOutlinedIcon
                        sx={{ width: "18px", height: "18px" }}
                      />
                      <p className="text-gray-700 whitespace-nowrap text-sm text-[10px] md:text-xs !font-bold  mr-1">
                        تحویل در 35 دقیقه
                      </p>
                      <span className="mx-[3px]"> | </span>
                      <span className="text-green-600 text-[12px]">رایگان</span>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowBackIosNewOutlinedIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  color: "rgb(175, 175, 175)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shops;
