import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Box } from "@mui/material";

const data = [
  {
    address: "  افق کوروش معلم 33",
  },
  {
    address: "افق کوروش امامت 56",
  },
  {
    address: "افق کوروش میدان سید رضی",
  },
];

function Shops() {
  return (
    <div className="flex flex-col !px-4 !py-4 md:!py-6">
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        <h5 className="text-base md:text-lg font-bold text-gray-950 leading-5 md:leading-6 mb-1 md:mb-2">
          3 فروشگاه در اطراف شما
        </h5>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <FmdGoodOutlinedIcon
            sx={{ width: "1.25rem", height: "1.25rem", color: "#686868" }}
          />
          <p className="text-xs md:text-sm font-medium text-gray-600 line-clamp-1 mr-1 pl-2">
            مشهد، سید رضی 46 پلاک ۳۱۳
          </p>
        </Box>
      </Box>
      <Box sx={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",mt:"1rem"}} /* md:mt-6 */>
        <div className="w-full flex items-center justify-center flex-wrap md:grid md:grid-cols-2 md:gap-3 md:mb-6">
          {data.map((item, index) => (
            <div key={index} className="w-full md:col-span-1">
              <div className="overflow-hidden cursor-pointer flex items-center justify-between border border-gray-200 rounded-lg py-3 pr-3 pl-2 md:px-4 md:py-3 w-full mb-2 md:mb-0">
                <Box sx={{display:"flex",alignItems:"center"}} >
                  <div className="flex justify-center items-center border border-gray-100 rounded-full h-[88px] w-[88px]">
                    <img
                      src="https://cdn.okala.com/Media/logo/1/200/200"
                      alt=""
                      loading="lazy"
                      className="h-[64px] w-[64px]"
                    />
                  </div>
                  <Box sx={{display:"flex",flexDirection:"column",ml:"0.625rem",alignItems:"flex-start"}} className="md:mr-3">
                    <h6 className="text-sm md:text-base font-bold text-gray-900 leading-5 line-clamp-1 mb-1.5 md:mb-3">
                      {item.address}
                    </h6>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                      <Box sx={{display:"flex",width:"fit-content",alignItems:"center",height:"1.5rem",paddingY:"0.3125rem"}} className="md:h-8">
                        <TwoWheelerOutlinedIcon
                          sx={{ width: "1.125rem", height: "1.125rem"}}
                        />
                        <p className="text-gray-700 whitespace-nowrap text-sm text-[10px] md:text-xs !font-bold  mr-1">
                          تحویل در 35 دقیقه
                        </p>
                        <span className="mx-[3px]"> | </span>
                        <span className="text-green-600 text-[12px]">
                          رایگان
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <ArrowBackIosNewOutlinedIcon
                  sx={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "rgb(175, 175, 175)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default Shops;
