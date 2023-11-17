import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperDelivery.css";
import { Navigation } from "swiper/modules";
import { Box, FormControlLabel, Radio, Typography } from "@mui/material";

export default function SwiperDelivery() {
  return (
    <>
      <Box sx={{position:"relative"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "0.5rem",
            width: "100%",
            zIndex: -10,
          }}
        >
              <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap:"3px",
              width: "fit-content",
              fontSize: ".875rem",
              border: "1px solid #f0f0f0",
              boxShadow:
                "0 4px 6px -2px hsla(0,0%,9%,.06),0 8px 12px -4px hsla(0,0%,9%,.06)!important",
              height: "2.25rem",
              paddingRight: "0.5rem",
              paddingLeft: "1rem",
              color: "#161616",
              position: "absolute",
              zIndex: 9999,
              top: 1,
              left: 0,
            }}
            className="button-prev-slide"
          >  <IoIosArrowForward />
            روز قبل
          
          </Box>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "#008684",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            جمعه 1402/8/26
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap:"3px",
              width: "fit-content",
              fontSize: ".875rem",
              border: "1px solid #f0f0f0",
              boxShadow:
                "0 4px 6px -2px hsla(0,0%,9%,.06),0 8px 12px -4px hsla(0,0%,9%,.06)!important",
              height: "2.25rem",
              paddingRight: "0.5rem",
              paddingLeft: "1rem",
              color: "#161616",
              position: "absolute",
              zIndex: 9999,
              top: 1,
              right: 0,
            }}
            className="button-next-slide"
          >
            روز بعد
            <IoIosArrowBack />
          </Box>
        </Box>
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  cursor: "pointer",
                  ":hover": { background: "#f8f8f8" },
                }}
              >
                <FormControlLabel
                  sx={{ fontSize: ".875rem", paddingLeft: "0.5rem" }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#363636",
                    fontWeight: 400,
                  }}
                >
                  رایگان
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  background: "#f8f8f8",
                }}
              >
                <FormControlLabel
                  sx={{
                    fontSize: ".875rem !important",
                    paddingLeft: "0.5rem",
                    color: "#afafaf",
                  }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#afafaf",
                    fontWeight: 400,
                  }}
                >
                  ظرفیت تکمیل
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  background: "#f8f8f8",
                }}
              >
                <FormControlLabel
                  sx={{
                    fontSize: ".875rem",
                    paddingLeft: "0.5rem",
                    color: "#afafaf",
                  }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#afafaf",
                    fontWeight: 400,
                  }}
                >
                  ظرفیت تکمیل
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  cursor: "pointer",
                  ":hover": { background: "#f8f8f8" },
                }}
              >
                <FormControlLabel
                  sx={{ fontSize: ".875rem", paddingLeft: "0.5rem" }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#363636",
                    fontWeight: 400,
                  }}
                >
                  رایگان
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  background: "#f8f8f8",
                }}
              >
                <FormControlLabel
                  sx={{
                    fontSize: ".875rem !important",
                    paddingLeft: "0.5rem",
                    color: "#afafaf",
                  }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#afafaf",
                    fontWeight: 400,
                  }}
                >
                  ظرفیت تکمیل
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: ".75rem",
                  minHeight: "3.75rem",
                  marginBottom: "0.0625rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  background: "#f8f8f8",
                }}
              >
                <FormControlLabel
                  sx={{
                    fontSize: ".875rem",
                    paddingLeft: "0.5rem",
                    color: "#afafaf",
                  }}
                  value="تحویل در 30 دقیقه"
                  control={<Radio />}
                  label="تحویل در 30 دقیقه"
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#afafaf",
                    fontWeight: 400,
                  }}
                >
                  ظرفیت تکمیل
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
