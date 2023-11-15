import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProDetailTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        "& .muirtl-19kzrtu": { padding: "0px", marginTop: "2.1875rem" },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ویژگی محصول " {...a11yProps(0)} />
          <Tab label=" توضیحات محصول" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={0.5}>
          <Grid item lg={4} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "3rem",
                background: "#f8f8f8",
                padding: "1rem 0.75rem",
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
          </Grid>
          <Grid item lg={4} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "3rem",
                background: "#f8f8f8",
                padding: "1rem 0.75rem",
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
            
                تاریخ انقضا :
              </Typography>
              <Typography
                sx={{ color: "#161616", fontWeight: 400, fontSize: "0.875rem" }}
              >
                75 روز
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "3rem",
                background: "#f8f8f8",
                padding: "1rem 0.75rem",
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
                {" "}
                نوع پنیر :
              </Typography>
              <Typography
                sx={{ color: "#161616", fontWeight: 400, fontSize: "0.875rem" }}
              >
                ساده
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "3rem",
                background: "#f0f0f0",
                padding: "1rem 0.75rem",
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
          </Grid>
          <Grid item lg={4} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "3rem",
                background: "#f0f0f0",
                padding: "1rem 0.75rem",
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
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography sx={{color:"#afafaf",fontSize:"1rem",fontWeight:300}}>توضیحی برای این محصول وجود ندارد</Typography>
      </CustomTabPanel>
    </Box>
  );
}
