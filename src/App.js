import React from "react";
import "firebase/compat/auth";
import { useAuth } from "./context/AuthContext";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import useSpoonacularRecipies from "./hooks/useSpoonacular";

// "_delegate":{
//   "uid":"lLQ3n9zHvSe1E2OoeG9IYhJe9Mm1",
//   "email":"atomcgarry@gmail.com",
//   "emailVerified":true,
//   "displayName":"Ahmed McGarry",

const App = () => {
  const context = useAuth();
  // const { currentUser } = context;

  // const [data, setData] = useState()
  const {isLoading, error, recipieData } = useSpoonacularRecipies( [{ query: "addRecipieInformation", value: true }] );
  
  return (
  <div>
    <Login />
    <Navbar />
  </div>
  );
};

export default App;
