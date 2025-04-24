// src/routes.tsx
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import Propose from "./components/Propose";
// import Commodities from "./components/Commodities";
// import Contact from "./components/Contact";
import Home from "./pages/Home";
import Commodities from "./pages/Commodities";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/commodity/:slug" element={<Commodities />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/propose" element={<Propose />} />
      <Route path="/commodities" element={<Commodities />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
