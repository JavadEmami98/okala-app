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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
