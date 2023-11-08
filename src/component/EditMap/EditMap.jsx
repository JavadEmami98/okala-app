import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  Slide,
  TextField,
} from "@mui/material";
import React from "react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { LuPenSquare } from "react-icons/lu";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditMap() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box
        onClick={handleClickOpen}
        component={PiPencilSimpleLineLight}
        sx={{ height: "24px", width: "24px" }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions>
          <div className="rounded-[12px] bg-[#fff] p-6 w-[848px] min-h-[588px]">
            <div className="flex pt-[4px] pb-[16px] pl-[8px]">
              <div className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[20px] ml-[10px]"></div>
              <h6 className="text-base font-medium text-gray-900">
                جزئیات آدرس
              </h6>
            </div>
            <Box
              sx={{
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                height: "132px",
                position: "relative",
                /* delete this item */
                backgroundColor: "gray",
              }}
            >
              <Button
                variant="text"
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  padding: "6px 16px",
                  borderRadius: "10px",
                  height: "40px",
                  /*  width: "182px", */
                  backgroundColor: "#fff",
                  fontSize: "12px",
                  color: "#02a0a4",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  ":hover": { backgroundColor: "#fff" },
                }}
              >
                <Box
                  component={LuPenSquare}
                  sx={{
                    width: "16px",
                    height: "16px",
                    marginLeft: "5px",
                    color: "#02a0a4",
                  }}
                />
                ویرایش موقعیت روی نقشه
              </Button>
            </Box>
            <div className="mt-9  relative">
              <div className="mb-6">
                <TextField
                  id="outlined-multiline-static"
                  label="آدرس تحویل گیرنده *"
                  multiline
                  rows={5}
                  defaultValue="Default Value"
                  sx={{
                    width: "100%",
                    borderRadius: "8px !important",
                  }}
                />
                <div className="absolute bg-gray-50 border-t border-gray-300 bottom-0 inset-x-0 rounded-b-lg w-full flex select-none p-3 z-[1]">
                  <span className="flex justify-center items-center flex-shrink-0 h-3 w-3 relative mx-3 pt-1.5">
                    <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-[#FC4E53] opacity-75"></span>
                    <span className="relative inline-flex rounded-full  h-2 w-2 bg-[#f01436]"></span>
                  </span>
                  <p class="text-xs font-normal text-gray-800 md:text-sm">
                    برای ویرایش آدرس ابتدا موقعیت مکانی را روی نقشه تغییر دهید.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full mb-6">
              <TextField
                required
                id="outlined-required"
                label="پلاک"
                defaultValue="70"
                sx={{ width: "100%" }}
              />
              <TextField
                required
                id="outlined-required"
                defaultValue="2"
                label="واحد"
                sx={{ width: "100%" }}
              />
            </div>
            <div className="flex items-center mb-6">
              <Checkbox />
              <span className="text-[14px] mt-1">تحویل گیرنده خودم نیستم</span>
            </div>
            <div className="flex justify-end w-full gap-2">
              <Button
                onClick={handleClose}
                variant="text"
                sx={{
                  width: "133px",
                  fontSize: "18px",
                  height: "48px",
                  border: "1px solid #afafaf",
                  borderRadius: "10px",
                  color: "#f01436",
                }}
              >
                انصراف
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "203px",
                  fontSize: "18px",
                  height: "48px",
                  backgroundColor: "#f01436",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#f01436" },
                  boxShadow: "none !important",
                }}
              >
                تایید و ثبت آدرس
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditMap;
