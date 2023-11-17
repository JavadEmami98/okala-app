import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { CgCheckR } from "react-icons/cg";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import EditMap from "../../EditMap/EditMap";

function LocationDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={handleClickOpen}
        className="flex items-center px-[6px] py-[8px] mr-[40px] rounded-[10px] cursor-pointer hover:bg-[#f8f8f8]"
      >
        <FmdGoodOutlinedIcon
          sx={{ mr: "8px", width: "20px", height: "20px" }}
        />
        <span className="text-sm text-[#545454]">مشهد، </span>
        <span className="text-sm text-[#545454]">سید رضی 46 پلاک ۳۱۳ </span>
        <KeyboardArrowDownOutlinedIcon
          sx={{ width: "20px", height: "20px", mr: "4px" }}
        />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ minWidth: "850px !important" }}
      >
        <div className="flex justify-between flex-col p-6 rounded-[12px] h-full w-full min-w-[850px]">
          <div className="flex flex-col ">
            <Box
              sx={{
                display: "flex",
                paddingTop: "0.25rem",
                paddingBottom: "1rem",
                paddingRight: "0.5rem",
              }}
            >
              <Box
                sx={{
                  borderLeft: "4px solid #7cc8cc",
                  borderRadius: "6.25rem",
                  height: "1.25rem",
                  marginRight: "0.625rem",
                }}
              ></Box>
              <h6 className="text-base font-medium text-gray-900">
                انتخاب آدرس
              </h6>
            </Box>

            <div className="flex flex-col justify-between cursor-pointer p-4 rounded-md border bg-[#e0f2f4] border-[#b0dee0] hover:bg-[#b0dee0]">
              <Box sx={{ display: "flex", height: "4.25rem" }}>
                <Box
                  component={CgCheckR}
                  sx={{
                    color: "#02a0a4",
                    marginRight: "0.5rem",
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />

                <p>سید رضی 46 پلاک ۳۱۳ - پلاک ۳۱۳ - واحد ۲</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className="text-[#8f8f8f] text-[18px]">09015427057</p>
                <div className="flex">
                  <Box
                    variant="outlined"
                    sx={{
                      display: "flex",
                      ":hover": { backgroundColor: "#f8f8f8" },
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFF",
                      height: "48px",
                      width: "48px",
                      padding: "6px 8px",
                      ml: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <EditMap />
                  </Box>
                  <Box
                    variant="outlined"
                    sx={{
                      display: "flex",
                      ":hover": { backgroundColor: "#f8f8f8" },
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFF",
                      height: "48px",
                      width: "48px",
                      padding: "6px 8px",
                      ml: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <DeleteDialog />
                  </Box>
                </div>
              </Box>
            </div>
          </div>

          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                border: "1px solid rgba(175, 175, 175, 1)",
                borderRadius: "10px",
                width: "133px",
                height: "48px",
                color: "#f01436",
                fontSize: "18px",
                ":hover": { border: "1px solid rgba(175, 175, 175, 1)" },
              }}
            >
              بستن
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                fontWeight: 400,
                mr: "8px",
                border: "1px solid rgba(175, 175, 175, 1)",
                borderRadius: "10px",
                width: "248px",
                height: "48px",
                backgroundColor: "#f01436",
                color: "#fff",
                fontSize: "18px",
                ":hover": {
                  border: "1px solid rgba(175, 175, 175, 1)",
                  backgroundColor: "#f01436",
                },
              }}
            >
              <AddIcon sx={{ mr: "4px" }} />
              افزودن آدرس جدید
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default LocationDialog;
