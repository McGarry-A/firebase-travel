import React from "react";
import "firebase/compat/auth";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/navbar/Navbar";
import useSpoonacularRecipies from "./hooks/useSpoonacular";
import Footer from "./components/footer/Footer";

const App = () => {
  const context = useAuth();
  
  const { currentUser, logout } = context;
  const { isLoading, error, recipieData } = useSpoonacularRecipies([
    { query: "addRecipieInformation", value: true },
  ]);

  return (
    <div className="">
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
