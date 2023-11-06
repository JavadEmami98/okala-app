import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import ListHamMenu from "./ListHamMenu";

function HamMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Fragment>
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{
            width: "48px",
            color: "#545454 !important",
            height: "48px",
            cursor: "pointer",
            padding: "12px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#f8f8f8" },
          }}
        />
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <div className="w-[307px] h-full relative">
            <div className="flex items-center justify-center py-2 shadow-sm">
              <img
                src="https://okala.com/static/images/icons/logo-okala2.svg"
                alt=""
                className="h-[49px] object-cover"
              />
              <CloseIcon
                className="absolute top-2 left-2"
                onClick={() => setOpen(false)}
                sx={{ opacity: "50%", color: "#000000" }}
              />
            </div>
            <div className="p-4">
              <ListHamMenu />
            </div>
          </div>
        </Drawer>
      </Fragment>
    </div>
  );
}

export default HamMenu;
