import { Box } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <Box sx={{ paddingTop: "1.5rem", paddingX: "1rem", marginBottom: "1rem" }}>
      <Box sx={{ maxWidth: "51.25rem", marginX: "auto" }}>
        <Box
          sx={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="جستجوی کالا یا برند"
            style={{
              boxShadow: "rgb(230, 230, 230) 0px 2px 4px -1px",
              height: "3.5rem",
            }}
            className=" text-[14px] border border-[#e6e6e6] rounded-[10px] w-full outline-none shadow-[rgb(230, 230, 230)_0px_2px_4px_-1px] py-[16px] px-[56px]"
          />
          <Box
            component={FiSearch}
            sx={{
              height: "1.5rem",
              width: "1.5rem",
              mr: "0.5rem",
              color: "#545454",
              position: "absolute",
              left: 15,
              top: 15,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBar;
