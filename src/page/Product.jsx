import { Box, Collapse, Switch } from "@mui/material";
import React, { useState } from "react";
import HeaderOkala from "../component/layout/header/HeaderOkala";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CartProduct from "../component/Cart/CartProduct";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AvailableBrands from "../component/AvailableBrands/AvailableBrands";
import FilterPrice from "../component/FilterPrice/FilterPrice";
import HeaderMobileProduct from "../component/layout/header/HeaderMobileProduct";

const data = [
  {
    image: "/image/cream.jpg",
    oldprice: " 325,000 ",
    price: " 243,000  ",
    offer: "25%",
    description: "خامه صبحانه 200 گرمی رامک",
  },
  {
    image: "/image/mast.jpg",
    oldprice: " 770,000 ",
    price: "  539,000 ",
    offer: "30%",
    description: "ماست 3.2درصد چربی 2 کیلویی صباح",
  },
  {
    image: "/image/pak.jpg",
    oldprice: " 150,000 ",
    price: "  118,500 ",
    offer: "21%",
    description: "دوغ بدون گاز نعناع و پونه 1 لیتری پاک",
  },
  {
    image: "/image/panir.jpg",
    oldprice: " 490,000 ",
    price: "  294,000 ",
    offer: "40%",
    description: "پنیر سفید 400 گرمی رامک",
  },
  {
    image: "/image/shir.jpg",
    oldprice: "390,000  ",
    price: "  351,000 ",
    offer: "10%",
    description: "شیر پر چرب 1 لیتری دومینو",
  },
  {
    image: "/image/ruzane.jpg",
    oldprice: "  810,000",
    price: "  729,000 ",
    offer: "10%",
    description: "پنیر نسبتا چرب 510گرمی روزانه ",
  },
  {
    image: "/image/mast7.jpg",
    oldprice: "  520,000",
    price: "  469,000 ",
    offer: "10%",
    description: "ماست  پرچرب سون 900 گرمی کاله  ",
  },
];

function Product() {
  const [activeItem, setActiveItem] = useState("");
  const handleClick2 = (item) => {
    setActiveItem(item);
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
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
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <HeaderMobileProduct />
      </Box>
      <div className="container">
        <Box
          sx={{
            textAlign: "start",
            marginBottom: "1rem",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <p className="text-gray-500 text-sm pt-3">94 کالا</p>
        </Box>
        <section className="flex">
          {/* Right */}
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
            <div className="max-w-[324px] min-w-[280px] pl-4">
              <div className="sticky  top-28">
                <Box
                  sx={{ boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px" }}
                  className="mb-3 rounded-xl p-4 max-h-[280px] min-h-[54px] flex flex-col transition-all duration-300"
                >
                  <div className="h-[33px] flex justify-between items-center mb-3 relative">
                    <p className="border-r-4 border-[#02a0a4] border-opacity-70 pr-1 text-sm font-medium">
                      فیلترهای اعمال شده
                    </p>
                    <button>
                      <span className="text-xs text-red-600">حذف همه</span>
                    </button>
                  </div>
                </Box>
                <Box
                  sx={{ boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px" }}
                  className="mb-3 rounded-xl p-4 max-h-[280px] min-h-[54px] flex flex-col transition-all duration-300"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      position: "relative",
                      marginBottom: "0.75rem",
                      height: "2.065rem",
                    }}
                    onClick={handleClick}
                  >
                    <p className="border-r-4 border-[#02a0a4] border-opacity-70 pr-1 text-sm font-medium">
                      دسته بندی نتایج
                    </p>
                    {open ? (
                      <ExpandLess sx={{ cursor: "pointer" }} />
                    ) : (
                      <ExpandMore sx={{ cursor: "pointer" }} />
                    )}
                  </Box>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <KeyboardArrowDownIcon
                        sx={{ width: "18px", height: "18px" }}
                      />
                      <p className="text-sm text-gray-600 mr-1.5 hover:text-gray-700 cursor-pointer">
                        خواربار
                      </p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "1rem",
                      }}
                    >
                      <KeyboardArrowLeftIcon
                        sx={{
                          color: "rgb(104, 104, 104)",
                          width: "14px",
                          height: "14px",
                        }}
                      />
                      <span className="text-sm text-gray-600 hover:text-gray-800 mr-1.5">
                        برنج
                      </span>
                      <span className="text-gray-400 mr-1.5 text-xs">(7)</span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "1.75rem",
                        marginTop: "0.625rem",
                        marginBottom: "0.25rem",
                      }}
                      className=" text-gray-800 font-medium"
                    >
                      <span className="text-sm text-gray-600 hover:text-gray-800 mr-1.5">
                        برنج ایرانی
                      </span>
                      <span className="text-gray-400 mr-1.5 text-xs">(77)</span>
                    </Box>
                  </Collapse>
                </Box>
                {/* Brand mojud */}
                <AvailableBrands />
                {/* kala mojud */}
                <Box
                  sx={{
                    boxShadow: " rgba(22, 22, 22, 0.04) 0px 2px",
                    marginBottom: "0.75rem",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    maxHeight: "17.5rem",
                    minHeight: "3.375rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="transition-all duration-300"
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Switch color="error" />
                    <p className="text-[.875rem]">فقط کالاهای موجود</p>
                  </Box>
                </Box>
                {/* Filter gheymat */}
                <FilterPrice />
              </div>
            </div>
          </Box>
          {/* Left */}
          <Box
            sx={{
              float: "left",
              marginBottom: "1rem",
              maxWidth: { lg: "calc(100% - 326px)" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                /*  display: "flex", */
                marginBottom: "1rem",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", float: "left" }}
              >
                <SwapVertIcon />
                <p className="pr-2 ">نمایش براساس</p>
              </Box>
              <ul>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    onClick={() => handleClick2("home")}
                    style={{ color: activeItem === "home" ? "green" : "black" }}
                    className="
                        px-3 py-2 rounded-lg text-[#02a0a4] bg-[#02a0a40a] text-[14px] font-medium
                        "
                  >
                    پرفروشترین
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    onClick={() => handleClick2("most")}
                    style={{ color: activeItem === "most" ? "green" : "black" }}
                    className="
                        px-3 py-2 rounded-lg  text-[14px] font-medium
                        "
                  >
                    بیشترین تخفیف
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    onClick={() => handleClick2("new")}
                    style={{ color: activeItem === "new" ? "green" : "black" }}
                    className="
                        px-3 py-2 rounded-lg  text-[14px] font-medium
                        "
                  >
                    جدیدترین
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    onClick={() => handleClick2("cheap")}
                    style={{
                      color: activeItem === "cheap" ? "green" : "black",
                    }}
                    className="
                        px-3 py-2 rounded-lg  text-[14px] font-medium
                        "
                  >
                    ارزانترین
                  </p>
                </li>
                <li className="inline-block px-2 cursor-pointer">
                  <p
                    onClick={() => handleClick2("expensive")}
                    style={{
                      color: activeItem === "expensive" ? "green" : "black",
                    }}
                    className="
                        px-3 py-2 rounded-lg  text-[14px] font-medium
                        "
                  >
                    گرانترین
                  </p>
                </li>
              </ul>
            </Box>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
              {data.map((item, index) => (
                <CartProduct
                  key={index}
                  image={item.image}
                  oldprice={item.oldprice}
                  price={item.price}
                  offer={item.offer}
                  description={item.description}
                />
              ))}
            </div>
          </Box>
        </section>
      </div>
    </div>
  );
}

export default Product;
