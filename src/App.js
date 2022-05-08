import React from "react";
import "firebase/compat/auth";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/Home/Home";
import Recipies from "./routes/Recipies/Recipies";
import Mission from "./routes/Mission/Mission";
import Chefs from "./routes/Chefs/Chefs";
import Auth from "./routes/Auth/Auth";
import AppWrapper from "./styles/AppWrapper";

const App = () => {
  return (
    <div className="bg-zinc-800 text-white w-full relative">
      <AppWrapper>
        <Navbar />
        <Outlet />
        <Footer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipies" element={<Recipies />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/our-mission" element={<Mission />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AppWrapper>
    </div>
  );
};

export default App;
