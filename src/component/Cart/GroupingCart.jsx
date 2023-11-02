import React from "react";

function GroupingCart({ image, title }) {
  return (
    <div className="cursor-pointer w-full  flex-col inline-flex bg-gray-50 rounded-lg mb-2 md:p-3">
      <div className="w-full h-full mx-auto mt-4 mb-0 flex flex-col items-center">
        <div
          style={{
            overflow: " hidden",
            boxSizing: "border-box",
            display: "inline-block",
            position: "relative",
            width: "56px",
            height: "56px",
          }}
        >
          <img src={image} alt="" />
        </div>

        <p className="text-xs md:text-base  text-center font-medium text-gray-800  md:mt-4 leading-5 tracking-[-0.72px] ">
          {title}
        </p>
      </div>
    </div>
  );
}

export default GroupingCart;
