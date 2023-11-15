import React from "react";
import { Box, Collapse, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import SwiperProDetailMobile from "../SwiperProDetailMobile/SwiperProDetailMobile";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ProDetailCollapse from "../ProDetailCollapse/ProDetailCollapse";

function ProDetailMobile() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow:
              "rgba(22, 22, 22, 0.04) 0px 2px 4px -1px, rgba(22, 22, 22, 0.04) 0px 4px 8px -1px",
            /*  position: "fixed", */
            zIndex: 1000,
            /* top: 0,
            left: 0, */
            height: "3.5rem",
            paddingLeft: "0.625rem",
            paddingRight: "1rem",
            width: "100%",
          }}
        >
          <EastIcon />
          <Box sx={{ position: "relative" }}>
            <Box
              component={FiShoppingCart}
              sx={{ width: "1.25rem", height: "1.25rem" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f01436",
                color: "#fff",
                borderRadius: "50%",
                width: "1.25rem",
                height: "1.25rem",
                position: "absolute",
                top: -10,
                left: -12,
                fontSize: "0.8125rem",
              }}
            >
              2
            </Box>
          </Box>
        </Box>
      </>
      <SwiperProDetailMobile />
      <Box
        sx={{
          paddingTop: "0.75rem",
          paddingX: "1rem",
          paddingBottom: "1.5rem",
        }}
      >
        <Box
          sx={{
            marginBottom: "2.5rem",
            color: "#161616",
            fontWeight: 500,
            fontSize: "1rem",
            textAlign: "start",
          }}
        >
          پنیر سفید 400 گرمی رامک
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "fit-content !important",
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src="/image/ramak-logo.png"
              alt=""
              sx={{ width: "2.25rem", height: "2.25rem" }}
            />
            <Typography sx={{ color: "#545454", fontSize: "0.9rem" }}>
              رامک
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "fit-content !important",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{ color: "#008684", fontSize: "0.875rem", fontWeight: 500 }}
            >
              مشاهده فروشگاه
            </Typography>
            <Box
              component={IoIosArrowBack}
              sx={{
                width: "1.25rem",
                height: "1.25rem",
                marginBottom: "2px",
                color: "#008684",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.375rem",
            marginTop: "0.75rem",
          }}
        >
          <Typography
            sx={{
              color: "#545454",
              fontSize: "0.9rem",
              marginRight: "0.75rem",
            }}
          >
            دسته بندی:
          </Typography>
          <Typography
            sx={{
              color: "#545454",
              fontSize: "0.9rem",

              fontWeight: 500,
            }}
          >
            پنیر صبحانه
          </Typography>
        </Box>
      </Box>
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
            ویژگی محصول
          </Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>

        <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: "2.375rem",
              background: "#f0f0f0",
              padding: "0.5rem 1rem",
            }}
          >
            <Typography
              sx={{
                color: "#8f8f8f",
                fontSize: "0.875rem",
                fontWeight: 400,
                marginRight: "1rem",
              }}
            >
              ویتامین ها :
            </Typography>
            <Typography
              sx={{ color: "#161616", fontWeight: 400, fontSize: "0.875rem" }}
            >
              D,B2,A,B12,K2
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: "2.375rem",
              background: "#f8f8f8",
              padding: "0.5rem 1rem",
            }}
          >
            <Typography
              sx={{
                color: "#8f8f8f",
                fontSize: "0.875rem",
                fontWeight: 400,
                marginRight: "1rem",
              }}
            >
              میزان چربی :
            </Typography>
            <Typography
              sx={{ color: "#161616", fontWeight: 400, fontSize: "0.875rem" }}
            >
              2.32 گرم
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: "2.375rem",
              background: "#f0f0f0",
              padding: "0.5rem 1rem",
            }}
          >
            <Typography
              sx={{
                color: "#8f8f8f",
                fontSize: "0.875rem",
                fontWeight: 400,
                marginRight: "1rem",
              }}
            >
              ابعاد بسته بندی :
            </Typography>
            <Typography
              sx={{ color: "#161616", fontWeight: 400, fontSize: "0.875rem" }}
            >
              13*9*6
            </Typography>
          </Box>
        </Collapse>
      </Box>
      <ProDetailCollapse />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "1rem",
          marginBottom: "2.25rem",
          overflowX: "auto",
          background: "#f8f8f8",
          height: "3.125rem",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={{
            borderRadius: "0.5rem",
            background: "#fff",
            color: "#545454",
            height: "2rem",
            padding: "0rem 1.5rem",
            marginRight: "0.375rem",
            gap: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#545454", fontSize: "0.875rem" }}>
            افق کوروش
          </Typography>
          <Box
            component={IoIosArrowBack}
            sx={{
              width: "0.875rem",
              height: "0.875rem",
              color: "#545454",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "0.5rem",
            background: "#fff",
            color: "#545454",
            height: "2rem",
            padding: "0rem 1.5rem",
            marginRight: "0.375rem",
            gap: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#545454", fontSize: "0.875rem" }}>
            لبنیات
          </Typography>
          <Box
            component={IoIosArrowBack}
            sx={{
              width: "0.875rem",
              height: "0.875rem",
              color: "#545454",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "0.5rem",
            background: "#fff",
            color: "#545454",
            height: "2rem",
            padding: "0rem 1.5rem",
            marginRight: "0.375rem",
            gap: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#545454", fontSize: "0.875rem" }}>
            پنیر
          </Typography>
          <Box
            component={IoIosArrowBack}
            sx={{
              width: "0.875rem",
              height: "0.875rem",
              color: "#545454",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "0.5rem",
            background: "#fff",
            color: "#545454",
            height: "2rem",
            padding: "0rem 1.5rem",
            marginRight: "0.375rem",
            gap: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#545454", fontSize: "0.875rem" }}>
            پنیر صبحانه
          </Typography>
          <Box
            component={IoIosArrowBack}
            sx={{
              width: "0.875rem",
              height: "0.875rem",
              color: "#545454",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "0.5rem",
            background: "#fff",
            color: "#545454",
            height: "2rem",
            padding: "0rem 1.5rem",
            marginRight: "0.375rem",
            gap: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#545454", fontSize: "0.875rem" }}>
            پنیر سفید 400 گرمی رامک
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ProDetailMobile;
