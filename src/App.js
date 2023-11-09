import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page";
import Product from "./page/Product";
import PageCart from "./page/PageCart";
import Factor from "./page/Factor";
import Store from "./page/Store";
import CheckOut from "./page/CheckOut";
import Profile from "./page/Profile";
import "./App.css";
import SupportMobile from "./page/SupportMobile";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
    body1: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {},
    h1: {},
    h2: {},
    h3: {},
    subtitle1: {},
    subtitle2: {},
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/page-cart" element={<PageCart />} />
            <Route path="/factor" element={<Factor />} />
            <Route path="/store" element={<Store />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<SupportMobile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
