import React from "react";
import "firebase/compat/auth";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import Hero from "./components/hero/Hero";
import data from "./data"

const App = () => {
  return (
    <div className="lg:max-w-[1920px] lg:mx-auto bg-zinc-800 text-white">
      <Navbar />
      <Hero />
      <Footer />
      <>
        <Carousel title="Featured Recipies" data={data}/>
        <Carousel title="Featured Chefs" data={data}/>
      </>
    </div>
  );
};

export default App;
