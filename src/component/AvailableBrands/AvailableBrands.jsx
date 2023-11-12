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
          marginBottom: "0.75rem",
          borderRadius: "0.75rem",
          padding: "1rem",
          maxHeight: "17.5rem",
          minHeight: "3.375rem",
        }}
      >
        <Box
          onClick={handleClick}
          sx={{
            height: "2.0625rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              borderLeft: "0.25rem solid #02a0a4",
              paddingLeft: "0.25rem",
              fontSize: "0.875rem",
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
                marginBottom: "0.5rem",
                paddingX: "0.75rem",
                border: "1px solid #afafaf",
                borderRadius: "0.5rem",
                paddingY: "0.75rem",
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
                  left: 7,
                  color: "rgb(54, 54, 54)",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              />
            </Box>
            {list.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                  height: "2.5rem",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "1rem !important",
                    height: "2.5rem",
                    width: "2.5rem",
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
