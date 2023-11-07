import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineUploadFile } from "react-icons/md";
import EastIcon from "@mui/icons-material/East";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MobileTabProfile() {
  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="px-[10px] h-[56px] flex items-center justify-start">
        <EastIcon sx={{ width: "20px", height: "20px" }} />
        <div className="pr-4">
          <div className="flex text-[14px] items-center gap-2 font-semibold">
            تماس با پشتیبانی
          </div>
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          "& .css-gulbw7-MuiButtonBase-root-MuiTab-root.Mui-selected ": {
            color: "#f01436",
          },
          "& .css-1aquho2-MuiTabs-indicator": { backgroundColor: "#f01436" },
          "& .css-gulbw7-MuiButtonBase-root-MuiTab-root": {
            fontSize: "14px",
            padding: "6px 12px",
          },
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            padding: "0px !important",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%" }}
          >
            <Tab label=" ثبت پیام" sx={{ width: "50%" }} {...a11yProps(0)} />
            <Tab
              label=" لیست پیام ها"
              sx={{ width: "50%" }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-col ">
            <Box
              sx={{
                backgroundImage: "url('/image/back-red.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className=" z-0 rounded-lg m-4 flex justify-between items-center h-[82px] p-4 "
            >
              <div className=" flex justify-between w-full  text-white">
                <div>
                  <div className="flex text-sm">
                    <LuPhoneCall style={{ width: "15px", height: "15px" }} />
                    <p className="mr-2 text-sm">مرکز تماس امور مشتریان</p>
                  </div>
                  <div className="text-medium text-start  mr-8 mt-1">1536</div>
                </div>
                <div className="text-xs text-gray-200 flex flex-col justify-center items-end">
                  <p>همه روزه</p>
                  <p>ساعت 8 تا 22</p>
                </div>
              </div>
            </Box>
            <hr />
            <div className="p-4">
              <p class="mb-9 text-start text-sm text-gray-600">
                برای پیگیری سفارش یا طرح سوالات خود، از طریق فرم زیر با ما در
                ارتباط باشید . تلاش میکنیم هرچه سریعتر به مشکل شما رسیدگی کنیم
              </p>
              <div className="flex flex-col w-full items-center gap-5">
                <div className="w-full">
                  <FormControl sx={{ width: "100%" }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="hi"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="hi"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <TextareaAutosize
                rows="8"
                class="w-full p-3 border rounded-lg outline-none resize-none mb-9 border-grey-200 description"
                aria-label="textarea"
                placeholder="لطفا در مورد موضوعی که انتخاب کرده اید توضیح دهید"
                name="messageDescription"
                style={{ height: " 208px", marginTop: "20px" }}
              />
              <div className="flex justify-between flex-row-reverse gap-4 w-full">
                <Button
                  variant="contained"
                  sx={{
                    width: "197px",
                    fontSize: "14px",
                    height: "36px",
                    backgroundColor: "#f01436",
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#f01436" },
                    boxShadow: "none !important",
                  }}
                >
                  ارسال
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    padding: "5px 15px",
                    fontSize: "14px",
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    borderRadius: "10px",
                    color: "#000000de",
                    height: "36px",
                    width: "143px",
                  }}
                >
                  <MdOutlineUploadFile
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      color: "rgb(104, 104, 104)",
                    }}
                  />
                  پیوست فایل
                </Button>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-col gap-6 pt-6">
            <Box
              sx={{
                backgroundImage: "url('/image/back-red.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className=" z-0 rounded-lg m-4 flex justify-between items-center h-[82px] p-4 "
            >
              <div className=" flex justify-between w-full  text-white">
                <div>
                  <div className="flex text-sm">
                    <LuPhoneCall style={{ width: "15px", height: "15px" }} />
                    <p className="mr-2 text-sm">مرکز تماس امور مشتریان</p>
                  </div>
                  <div className="text-medium text-start  mr-8 mt-1">1536</div>
                </div>
                <div className="text-xs text-gray-200 flex flex-col justify-center items-end">
                  <p>همه روزه</p>
                  <p>ساعت 8 تا 22</p>
                </div>
              </div>
            </Box>
            <hr />
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
}
