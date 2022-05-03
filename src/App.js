import React from "react";
import "firebase/compat/auth";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import useSpoonacularRecipies from "./hooks/useSpoonacular";
import Carousel from "./components/carousel/carousel/Carousel";

const App = () => {
  const context = useAuth();
  
  const { currentUser, logout } = context;
  const { isLoading, error, recipieData } = useSpoonacularRecipies([
    { query: "addRecipieInformation", value: true },
  ]);

  return (
    <div>
      {/* <Login /> */}
      <Navbar />
      {/* <Carousel />
      <button onClick={logout}>Log Out</button> */}
    </div>
  );
};

export default App;
