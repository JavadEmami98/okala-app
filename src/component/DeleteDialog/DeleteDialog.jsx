import React from "react";
import { Button, Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import DialogActions from "@mui/material/DialogActions";
import { AiOutlineDelete } from "react-icons/ai";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AiOutlineDelete
        onClick={handleClickOpen}
        style={{ height: "24px", width: "24px" }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{ height: "300px" }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions>
          <div className="rounded-[12px] bg-[#fff] p-6">
            <h4 className="text-[#161616] text-[1.5rem] font-medium mb-[1rem]">
              حذف آدرس
            </h4>
            <h6 className="text-[#363636] text-[1rem] font-medium">
              آیا از حذف آدرس مورد نظر مطمئن هستید؟
            </h6>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button
                onClick={() => setOpen(false)}
                variant="text"
                sx={{
                  width: "100%",
                  fontSize: "17px",
                  height: "42px",
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
                  width: "100%",
                  fontSize: "17px",
                  height: "42px",
                  backgroundColor: "#f01436",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#f01436" },
                  boxShadow: "none !important",
                }}
              >
                بله، حذف کن
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
