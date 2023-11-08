import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Checkbox, Collapse, Typography } from "@mui/material";
import { LuSearch } from "react-icons/lu";

const list = [{ title: "چی توز" }, { title: "دامداران" }, { title: "مزمز" }];

function AvailableBrands() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          transition: "all",
          transitionDuration: "300ms",
          boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px",
          marginBottom: "12px",
          borderRadius: "12px",
          padding: "16px",
          maxHeight: "280px",
          minHeight: "54px",
        }}
      >
        <Box
          onClick={handleClick}
          sx={{
            height: "33px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              borderRight: "4px solid #02a0a4",
              paddingRight: "4px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            برندهای موجود
          </Typography>
          {open ? (
            <ExpandLess sx={{ cursor: "pointer" }} />
          ) : (
            <ExpandMore sx={{ cursor: "pointer" }} />
          )}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ paddingX: "12px" }}>
            <Box
              sx={{
                position: "relative",
                marginBottom: "8px",
                paddingX: "12px",
                border: "1px solid #afafaf",
                borderRadius: "8px",
                paddingY: "12px",
              }}
            >
              <input
                type="text"
                name=""
                id=""
                className="pr-4"
                placeholder="... جستجوی نام برند "
              />
              <Box
                component={LuSearch}
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 7,
                  color: "rgb(54, 54, 54)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            {list.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "16px",
                  height: "40px",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "16px !important",
                    height: "40px",
                    width: "40px",
                  }}
                />
                <Typography sx={{ fontSize: ".875rem" }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export default AvailableBrands;
