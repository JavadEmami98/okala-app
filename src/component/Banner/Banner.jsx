import { Box } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box>
      <img
        src="/image/banner1.jpg"
        alt=""
        loading="lazy"
        className="rounded-[0.5rem]"
      />
    </Box>
  );
}

export default Banner;
