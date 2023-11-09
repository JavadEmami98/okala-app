import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Button, Collapse, Slider } from "@mui/material";

function FilterPrice() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event) => {
    setValue();
  };
  return (
    <div>
      <Box
        sx={{ boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px" }}
        className="mb-3 rounded-xl p-4 max-h-[280px] min-h-[54px] flex flex-col transition-all duration-300"
      >
        <div
          onClick={handleClick}
          className="h-[33px] flex justify-between items-center mb-3 relative"
        >
          <p className="border-r-4 border-[#02a0a4] border-opacity-70 pr-1 text-sm font-medium">
            فیلتر قیمت
          </p>
          {open ? (
            <ExpandLess sx={{ cursor: "pointer" }} />
          ) : (
            <ExpandMore sx={{ cursor: "pointer" }} />
          )}
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="flex items-center justify-center flex-col !bg-white">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
            <div className="w-[276px] h-[48px] my-4 mx-auto bg-gray-50 rounded-lg flex items-center justify-between py-3 px-2">
              <div className="flex flex-1 items-center">
                <p className="text-xs font-medium">تا</p>
                <input
                  type="text"
                  className="text-center w-full h-full rounded-xl border-none outline-none text-base p-3 font-medium bg-transparent text-gray-900 focus:border-transparent"
                  value="250,000"
                />
                <p className="text-grey-600">ریال</p>
              </div>
              <hr className="w-[1px] bg-[#0000001f] mx-4 h-full" />
              <div className="flex flex-1 items-center">
                <p className="text-xs font-medium">تا</p>
                <input
                  type="text"
                  className="text-center w-full h-full rounded-xl border-none outline-none text-base p-3 font-medium bg-transparent text-gray-900 focus:border-transparent"
                  value="130,000"
                />
                <p className="text-grey-600">ریال</p>
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginY: "16px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #afafaf",
                  borderRadius: "10px",
                  color: "#f01436",
                  fontSize: "15px",
                  height: "40px",
                }}
                disabled
              >
                مقدار پیش فرض
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontSize: "15px",
                  height: "40px",
                  backgroundColor: "#f01436",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#f01436" },
                  boxShadow: "none !important",
                }}
              >
                فیلتر قیمت
              </Button>
            </Box>
          </div>
        </Collapse>
      </Box>
    </div>
  );
}

export default FilterPrice;
