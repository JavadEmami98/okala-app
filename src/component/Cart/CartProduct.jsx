import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box, Dialog, DialogActions } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function CartProduct({ image, oldprice, price, offer, description }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <div
          onClick={handleClickOpen}
          className="relative w-full flex flex-col items-center bg-white box-border border-collapse border-gray-200 cursor-pointer z-10 pt-4 !h-[252px] border "
        >
          <div className="absolute top-28 right-3 z-[11]">
            {/*  <div className="h-9 !rounded-full hover: bg-white shadow-sm !border !border-red-700 #fff !text-red-600 
          jss162" style={{width:" 36px",padding:"6px 8px", minWidth: "36x",border: "1px solid #de082e"}}> + </div> */}
            <AddCircleOutlineOutlinedIcon
              sx={{ width: "36px", height: "36px", color: "#f01436" }}
            />
          </div>
          <Box sx={{ width: "8rem", height: "8rem" }}>
            <img src={image} alt="" loading="lazy" />
          </Box>
          <div className="w-full flex justify-between mt-2 h-11 px-3">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through pt-1">
                {oldprice}
              </p>
              <div className="flex items-center">
                <p className="text-base md:text-lg font-bold text-gray-900 leading-7">
                  {price}
                </p>
                <span className="text-xs font-normal text-gray-800 mr-1">
                  ریال
                </span>
              </div>
            </Box>
            <div className="flex justify-center w-[32px] h-[24px] items-center bg-[#f01436] rounded-[100px] select-none  mt-4">
              <span className="text-xs font-medium text-white leading-4">
                {offer}
              </span>
            </div>
          </div>
          <div className="w-full h-9 flex-shrink-0 text-right text-xs font-medium md:font-normal text-gray-700 line-clamp-2 mt-2 mb-[6px] px-3">
            {description}
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions>
            <div className="relative p-9">
              <Box
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 3,
                  left: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid rgba(175, 175, 175, 1)",
                  borderRadius: "8px",
                  minWidth: "42px",
                  height: "42px",
                }}
              >
                <Box
                  component={AiOutlineClose}
                  sx={{ color: "green !important" }}
                />
              </Box>
              <ul className="mb-9  text-[#686868] text-[.75rem]">
                <li className=" gap-2">
                  <p>افق کوروش</p>
                  <ArrowBackIosNewIcon />
                </li>
              </ul>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default CartProduct;
