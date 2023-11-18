import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/material";

function Account() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: ".5rem",
          paddingY: "0.78125rem",
          marginRight: ".5rem",
          cursor: "pointer",
          borderRadius: ".625rem",
          "&:hover": { background: "#f8f8f8" },
        }}
      >
        <AccountCircleOutlinedIcon />
        <p className="text-sm font-medium text-grey-800 pr-2 whitespace-nowrap">
          پروفایل
        </p>
        <KeyboardArrowDownOutlinedIcon
          sx={{ width: "1.25rem", height: "1.25rem", ml: "0.25rem" }}
        />
      </Box>
    </div>
  );
}

export default Account;
