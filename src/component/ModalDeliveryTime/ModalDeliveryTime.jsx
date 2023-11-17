import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import SwiperDelivery from "../SwiperDelivery/SwiperDelivery";

function ModalDeliveryTime() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          width: "100%",
          fontSize: "16px",
          height: "48px",
          backgroundColor: "#f01436",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#f01436" },
          boxShadow: "none !important",
        }}
      >
        انتخاب زمان تحویل
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            sx={{
              /*          width: "53rem",
              borderRadius: "0.75rem",
              minHeight: "37.0625rem", */
              borderRadius: ".75rem",
              padding: "1.5rem",
            }}
            id="alert-dialog-description"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: 500, fontSize: "1.5rem", color: "#161616" }}
                >
                  انتخاب زمان تحویل سفارش
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.625rem",
                    height: "2.625rem",
                    border: "1px solid #afafaf",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    onClick={handleClose}
                    component={IoCloseOutline}
                    sx={{ width: "1.5rem", height: "1.5rem", color: "#161616" }}
                  />
                </Box>
              </Box>
              <Box sx={{ paddingTop: "2.5rem" }}>
                <SwiperDelivery />
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDeliveryTime;
