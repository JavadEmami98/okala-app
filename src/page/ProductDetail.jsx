import { Box, Typography } from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import { IoIosArrowBack } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import SwiperPro from "../component/SwiperProDetail/SwiperPro";
import { AiOutlineDelete } from "react-icons/ai";
import ProDetailTab from "../component/ProDetailTab/ProDetailTab";
import ProDetailMobile from "../component/ProDetailMobile/ProDetailMobile";

function ProductDetail() {
  return (
    <>
      <div className="container">
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <HeaderOkala />
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Box sx={{ padding: "2.25rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginBottom: "2.25rem",
                fontSize: "0.75rem",
                color: "#686868",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", cursor: "pointer" }}>
                افق کوروش
              </Typography>
              <Box
                component={IoIosArrowBack}
                sx={{ width: "1rem", height: "1rem", color: "#686868" }}
              />
              <Typography sx={{ fontSize: "0.75rem", cursor: "pointer" }}>
                لبنیات
              </Typography>
              <Box
                component={IoIosArrowBack}
                sx={{ width: "1rem", height: "1rem", color: "#686868" }}
              />
              <Typography sx={{ fontSize: "0.75rem", cursor: "pointer" }}>
                پنیر
              </Typography>
              <Box
                component={IoIosArrowBack}
                sx={{ width: "1rem", height: "1rem", color: "#686868" }}
              />
              <Typography sx={{ fontSize: "0.75rem" }}> پنیر صبحانه</Typography>
              <Box
                component={IoIosArrowBack}
                sx={{ width: "1rem", height: "1rem", color: "#686868" }}
              />
              <Typography sx={{ fontSize: "0.75rem" }}>
                پنیر سفید 400 گرمی رامک
              </Typography>
            </Box>
            <Box sx={{ padding: "2.25rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginBottom: "3.125rem",
                }}
              >
                {/* Right */}
                <Box
                  sx={{
                    display: "flex",
                    width: "37.5rem",
                    height: "25.5rem",
                    paddingRight: "1.5rem",
                    marginRight: "1rem",
                  }}
                >
                  {/* Swiper */}
                  <SwiperPro />
                </Box>
                {/* Left */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      marginBottom: "2.9375rem",
                      textAlign: "start",
                    }}
                  >
                    پنیر سفید 400 گرمی رامک
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "1.375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      width: "fit-content !important",
                      borderRadius: "0.625rem",
                      cursor: "pointer",
                      padding: "0.5rem",
                      "&:hover": { background: "#fafafa" },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/image/ramak-logo.png"
                      alt=""
                      sx={{ width: "2.75rem", height: "2.75rem" }}
                    />
                    <Typography
                      sx={{
                        color: "#008684",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      رامک
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1.375rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 400,
                        marginRight: "0.75rem",
                      }}
                    >
                      دسته بندی:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "#008684",
                      }}
                    >
                      پنیر صبحانه
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginTop: "auto",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #de082e",
                        borderRadius: "5rem",
                        width: "6.4375rem",
                        height: "2.25rem",
                        background: "#fff",
                        boxShadow: "rgba(60, 60, 60, 0.1) 0px 4px 4px 0px",
                      }}
                    >
                      <Box
                        component={IoAddSharp}
                        sx={{
                          width: "38px",
                          height: "38px",
                          color: "#f01436",
                          padding: "6px 8px",
                          cursor: "pointer",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 500,
                          color: "#161616",
                        }}
                      >
                        1
                      </Typography>
                      <Box
                        component={AiOutlineDelete}
                        sx={{
                          width: "38px",
                          height: "38px",
                          color: "#f01436",
                          padding: "6px 8px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            color: "#fff",
                            background: "#4CB04C",
                            borderRadius: "0.5rem",
                            width: "3.3125rem",
                            lineHeight: "2rem",
                            fontWeight: 500,
                          }}
                        >
                          40%
                        </Box>
                        <Typography
                          sx={{
                            color: "#8f8f8f",
                            textDecoration: "line-through",
                            marginLeft: "1.125rem",
                            fontSize: "1.25rem",
                            fontWeight: 400,
                          }}
                        >
                          ۴۹۰٬۰۰۰
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "#363636",
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        ۲۹۴٬۰۰۰ ریال
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Tab */}
            <Box>
              <ProDetailTab />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "noe",
            },
          }}
        >
          <ProDetailMobile />
        </Box>
      </div>
    </>
  );
}

export default ProductDetail;

/* https://okala.com/store/5758/product/6362/%D9%BE%D9%86%DB%8C%D8%B1%20%D8%B3%D9%81%DB%8C%D8%AF%20400%20%DA%AF%D8%B1%D9%85%DB%8C%20%D8%B1%D8%A7%D9%85%DA%A9 */
