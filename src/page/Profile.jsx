import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import ProfileMobile from "./ProfileMobile";
import { BsPerson } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import TabProfile from "../component/TabProfile/TabProfile";

function Profile() {
  return (
    <div>
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
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <ProfileMobile />
      </Box>
      <div className="container lg:block hidden">
        <div className="flex mt-6 mb-20 ">
          {/* Right */}
          <div className="sticky pb-20 top-28 min-w-[308px]">
            <Box>
              <Box
                sx={{
                  padding: "12px",
                  boxShadow: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage:
                      "url('https://okala.com/static/images/siteImages/backgrounds/profileBackground.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="flex items-center cursor-pointer justify-between w-full py-[16px] px-[12px] h-[82px] rounded-[13px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center ml-3">
                        <Box
                          component={BsPerson}
                          sx={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <p className="text-[16px] text-[#e0f2f4] text-start">
                          امین بابایی
                        </p>
                        <h2 className="text-[20px] text-[#ffffff]">
                          09129123355
                        </h2>
                      </div>
                    </div>
                  </div>
                  <NavigateBeforeOutlinedIcon sx={{ color: "#fff" }} />
                </Box>
                <div className="flex justify-between rounded-[10px] px-[8px] py-[6px] items-center mt-5 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <Box
                      component={CiWallet}
                      sx={{
                        color: "rgb(2, 160, 164)",
                        width: "24px",
                        height: "24px",
                      }}
                    />

                    <p className="text-[14px]">کیف پول</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-base">0</p>
                    <p className="text-xs">ریال</p>
                  </div>
                </div>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: "0px 2px 8px 1px rgba(116, 68, 68, 0.04)",
                mt: "16px",
                borderRadius: "12px",
                backgroundColor: "#fff",
              }}
            >
              <ul className="p-1">
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] cursor-pointer border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={CgNotes}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> سفارش‌های من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] rounded-[10px] border-b cursor-pointer border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={HiOutlineLocationMarker}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> آدرس‌های من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] cursor-pointer rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={CiDiscount1}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />

                      <p className="text-base">کدهای تخفیف من </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 px-[12px] cursor-pointer rounded-[10px] border-b border-[#f8f8f8]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={IoCallOutline}
                        sx={{
                          color: "rgb(2, 160, 164)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> تماس با پشتیبانی </p>
                    </div>
                    <NavigateBeforeOutlinedIcon
                      sx={{ color: "rgb(104, 104, 104)" }}
                    />
                  </div>
                </li>
                <li className="py-[16px] hover:bg-gray-50 cursor-pointer px-[12px] rounded-[10px]">
                  <div className="flex items-center justify-between w-full p-2">
                    <div className="flex items-center gap-2">
                      <Box
                        component={IoLogOutOutline}
                        sx={{
                          color: "rgb(240, 20, 54)",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <p className="text-base"> خروج از حساب </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Box>
          </div>
          {/* Left */}
          {/*    <div className="mr-6 w-full">
            <Box
              sx={{
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)",
                backgroundColor: "#fff",
                minHeight: "550px",
                width: "100%",
                height: "100%",
              }}
              className="w-full"
            >
              <div className="flex items-center mb-4">
                <div className=" border-l-[4px] border-[#7cc8cc] rounded-[100px] h-[16px] ml-[16px]"></div>
                <h6 className="text-lg font-medium text-gray-900">
                  تماس با پشتیبانی
                </h6>
              </div>
              <TabProfile />
            </Box>
          </div> */}
          <Box sx={{ width: "100%", marginLeft: "1.5rem" }}>
            <Box
              sx={{
                paddingX: "0.5rem",
                paddingBottom: "5rem",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "1rem",
                  marginBottom: "0.75rem",
                  marginTop: "1rem",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                سفارش‌های قبلی
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  borderRadius: "0.5rem",
                  border: "1px solid #e6e6e6",
                  width: "100%",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #e6e6e6",
                    width: "100%",
                    paddingX: "1.5rem",
                    paddingY: "0.125rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: "2.75rem", height: "2.75rem" }}>
                      <img src="/image/ok.png" alt="" />
                    </Box>
                    <Typography
                      sx={{
                        marginLeft: "0.5rem",
                        color: "#686868",
                        fontWeight: 400,
                        fontSize: "0.75rem",
                      }}
                    >
                      فرانچایز امامت 56 افق کوروش مشهد
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        background: "#f0f0f0",
                        color: "#545454",
                        fontWeight: 400,
                        fontSize: ".75rem",
                        paddingX: ".25rem",
                        borderRadius: "0.5rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      تحویل شده
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: "1.5rem",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: "0.5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#686868",
                          fontSize: ".875rem",
                          fontWeight: 400,
                        }}
                      >
                        بازه تحویل :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#161616",
                          fontSize: ".875rem",
                          fontWeight: 400,
                          paddingLeft: "0.125rem",
                        }}
                      >
                        دوشنبه 7 فروردین21:06 تا 22:05
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: "0.5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#686868",
                          fontSize: ".875rem",
                          fontWeight: 400,
                        }}
                      >
                        تحویل به :{" "}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#161616",
                          fontSize: ".875rem",
                          fontWeight: 400,
                          paddingLeft: "0.125rem",
                        }}
                      >
                        ب. وکیل آباد، خ. بلوار امامت، خ. امامت ۴۳
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      paddingY: "0.75rem",
                      paddingLeft: "0.5rem",
                      borderRadius: "0.5rem",
                      minHeight: "5.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/pasta.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        2
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/rob.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        5
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/ruzane.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        7
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        marginLeft: "1.5rem",
                        fontWeight: 500,
                        color: "#060606",
                      }}
                    >
                      6+ کالای دیگر...
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    height: "4.0625rem",
                    justifyContent: "flex-end",
                    width: "100%",
                    paddingX: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "0.5rem",
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#000000de",
                    }}
                  >
                    ۳٬۳۳۲٬۶۵۰ ريال
                  </Box>
                  <Button
                    variant="text"
                    sx={{
                      width: "157px",
                      fontSize: "0.875rem",
                      height: "2.5rem",
                      border: "1px solid #f0143680",
                      borderRadius: "10px",
                      color: "#f01436",
                      "&:hover": { background: "#f014360a" },
                    }}
                  >
                    سفارش گذاری مجدد
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "130px",
                      fontSize: "0.875rem",
                      height: "2.5rem",
                      backgroundColor: "#f01436",
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#f01436" },
                      boxShadow: "none !important",
                    }}
                  >
                    جزئیات سفارش
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  borderRadius: "0.5rem",
                  border: "1px solid #e6e6e6",
                  width: "100%",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #e6e6e6",
                    width: "100%",
                    paddingX: "1.5rem",
                    paddingY: "0.125rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: "2.75rem", height: "2.75rem" }}>
                      <img src="/image/ok.png" alt="" />
                    </Box>
                    <Typography
                      sx={{
                        marginLeft: "0.5rem",
                        color: "#686868",
                        fontWeight: 400,
                        fontSize: "0.75rem",
                      }}
                    >
                      فرانچایز امامت 56 افق کوروش مشهد
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        background: "#f0f0f0",
                        color: "#545454",
                        fontWeight: 400,
                        fontSize: ".75rem",
                        paddingX: ".25rem",
                        borderRadius: "0.5rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      تحویل شده
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: "1.5rem",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: "0.5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#686868",
                          fontSize: ".875rem",
                          fontWeight: 400,
                        }}
                      >
                        بازه تحویل :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#161616",
                          fontSize: ".875rem",
                          fontWeight: 400,
                          paddingLeft: "0.125rem",
                        }}
                      >
                        دوشنبه 7 فروردین21:06 تا 22:05
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: "0.5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#686868",
                          fontSize: ".875rem",
                          fontWeight: 400,
                        }}
                      >
                        تحویل به :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#161616",
                          fontSize: ".875rem",
                          fontWeight: 400,
                          paddingLeft: "0.125rem",
                        }}
                      >
                        ب. وکیل آباد، خ. بلوار امامت، خ. امامت ۴۳
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      paddingY: "0.75rem",
                      paddingLeft: "0.5rem",
                      borderRadius: "0.5rem",
                      minHeight: "5.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/pasta.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        2
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/rob.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        5
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        height: "2.75rem",
                        width: "2.75rem",
                      }}
                    >
                      <img src="/image/ruzane.jpg" alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#02a0a4",
                          color: "#fff",
                          width: "1rem",
                          height: "1rem",
                          fontSize: ".625rem",
                          fontWeight: 500,
                          position: "absolute",
                          bottom: -5,
                          left: -2,
                        }}
                      >
                        7
                      </Box>
                    </Box>
                    {/*  <Typography
                      sx={{
                        fontSize: "0.875rem",
                        marginLeft: "1.5rem",
                        fontWeight: 500,
                        color: "#060606",
                      }}
                    >
                      6+ کالای دیگر...
                    </Typography> */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    height: "4.0625rem",
                    justifyContent: "flex-end",
                    width: "100%",
                    paddingX: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "0.5rem",
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#000000de",
                    }}
                  >
                    2٬333٬450 ريال
                  </Box>
                  <Button
                    variant="text"
                    sx={{
                      width: "157px",
                      fontSize: "0.875rem",
                      height: "2.5rem",
                      border: "1px solid #f0143680",
                      borderRadius: "10px",
                      color: "#f01436",
                      "&:hover": { background: "#f014360a" },
                    }}
                  >
                    سفارش گذاری مجدد
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "130px",
                      fontSize: "0.875rem",
                      height: "2.5rem",
                      backgroundColor: "#f01436",
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#f01436" },
                      boxShadow: "none !important",
                    }}
                  >
                    جزئیات سفارش
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Profile;
