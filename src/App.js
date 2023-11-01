import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./page";
import ProfileMobile from "./page/ProfileMobile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile-mobile" element={<ProfileMobile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
