import { Box, Collapse, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";

function ProDetailCollapse() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        onClick={handleClick}
        sx={{
          width: "100%",

          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "3.375rem",
            paddingX: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "#161616",
              fontSize: "0.9rem",
            }}
          >
            توضیحات محصول
          </Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>

        <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
          <Box
            sx={{
              paddingX: "1rem",
              fontSize: "0.9rem",
              paddingBottom: "2.25rem",
              textAlign: "start",
            }}
          >
            توضیحی برای این محصول وجود ندارد
          </Box>
        </Collapse>
      </Box>
    </div>
  );
}

export default ProDetailCollapse;
