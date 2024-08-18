import Register from "./pages/Register";
import AboutUs from "./website/AboutUs";
import Books from "./website/Books";
import ContactUs from "./website/ContactUs";
import Home from "./website/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndConditions from "./website/TermsAndConditions";
import SportsAndArts from "./website/SportsAndArts";
import SchoolsWithTalent from "./website/SchoolsWithTalent";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/sports-and-arts" element={<SportsAndArts />} />
          <Route path="/schools-with-talent" element={<SchoolsWithTalent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
