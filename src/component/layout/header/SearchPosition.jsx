import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchPosition() {
  return (
    <div>
      <div className="min-w-[542px] mx-auto">
        <div className="relative flex items-center ">
          <input
            type="text"
            placeholder="جستجوی کالا یا برند"
            style={{ boxShadow: "rgb(230, 230, 230) 0px 2px 4px -1px" }}
            className="h-[56px] text-[14px] border border-[#e6e6e6] rounded-[10px] w-full outline-none shadow-[rgb(230, 230, 230)_0px_2px_4px_-1px] py-[16px] px-[56px]"
          />
          <FiSearch
            style={{
              height: "24px",
              width: "24px",
              ml: "8px",
              color: "#545454",
              position: "absolute",
              right:15,
              top: 15,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPosition;
