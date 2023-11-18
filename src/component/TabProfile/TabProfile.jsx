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
import PropTypes from 'prop-types';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineUploadFile } from "react-icons/md";


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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabProfile() {
  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
          color: "#f01436",
        },
        "& .css-1aquho2-MuiTabs-indicator": { backgroundColor: "#f01436" },
        "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
          fontSize: "1rem",
          padding: "0rem 2.25rem",
        },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" ثبت پیام" {...a11yProps(0)} />
          <Tab label=" لیست پیام ها" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-6 pt-6">
          <Box
            sx={{
              backgroundImage: "url('/image/back-red.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative z-0 flex items-center justify-between w-full h-[104px] rounded-[10px]"
          >
            <div className="absolute flex justify-between w-full px-6 py-4 text-white">
              <div>
                <div className="flex text-sm">
                  <Box
                    component={LuPhoneCall}
                    sx={{ width: "20px", height: "20px", marginTop: "3px" }}
                  />

                  <p className="mr-2 text-base">مرکز تماس امور مشتریان</p>
                </div>
                <div className="text-xl text-start tel mr-11 mt-1">1536</div>
              </div>
              <div className="flex flex-col items-end justify-center text-base text-gray-200">
                <p>همه روزه</p>
                <p>ساعت 8 تا 22</p>
              </div>
            </div>
          </Box>
          <hr />
          <p class="text-sm text-start text-gray-600">
            برای پیگیری سفارش یا طرح سوالات خود، از طریق فرم زیر با ما در ارتباط
            باشید . تلاش میکنیم هرچه سریعتر به مشکل شما رسیدگی کنیم
          </p>
          <div className="flex w-full items-center gap-2 mt-8">
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
          <div className="mb-5 w-full">
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
          <TextareaAutosize
            rows="8"
            class="w-full p-3 border rounded-lg outline-none resize-none mb-9 border-grey-200 description"
            aria-label="textarea"
            placeholder="لطفا در مورد موضوعی که انتخاب کرده اید توضیح دهید"
            name="messageDescription"
            style={{ height: " 208px" }}
          />
          <div className="flex flex-row-reverse items-center justify-start w-full gap-2 pb-6 pr-6">
            <Button
              variant="contained"
              sx={{
                width: "145px",
                fontSize: "18px",
                height: "48px",
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
                padding: "7px 21px",
                fontSize: "18px",
                border: "1px solid rgba(0, 0, 0, 0.23)",
                borderRadius: "10px",
                color: "#000000de",
              }}
            >
              <Box
                component={MdOutlineUploadFile}
                sx={{
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
            className="relative z-0 flex items-center justify-between w-full h-[104px] rounded-[10px]"
          >
            <div className="absolute flex justify-between w-full px-6 py-4 text-white">
              <div>
                <div className="flex text-sm">
                  <Box
                    component={LuPhoneCall}
                    sx={{ width: "20px", height: "20px", marginTop: "3px" }}
                  />
                  <p className="mr-2 text-base">مرکز تماس امور مشتریان</p>
                </div>
                <div className="text-xl text-start tel mr-11 mt-1">1536</div>
              </div>
              <div className="flex flex-col items-end justify-center text-base text-gray-200">
                <p>همه روزه</p>
                <p>ساعت 8 تا 22</p>
              </div>
            </div>
          </Box>
          <hr />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
