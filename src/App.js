import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page";
import ProfileMobile from "./page/ProfileMobile";
import Product from "./page/Product";
import PageCart from "./page/PageCart";
import Factor from "./page/Factor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile-mobile" element={<ProfileMobile />} />
          <Route path="/page-cart" element={<PageCart />} />
          <Route path="/factor" element={<Factor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
