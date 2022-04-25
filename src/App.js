import React from "react";
import "firebase/compat/auth";
import { useAuth } from "./context/AuthContext";
import Login from "./components/login/Login";


const App = () => {
  const auth = useAuth();
  
  return <Login />
}

export default App;