import React from "react";
import "firebase/compat/auth";
// import { useAuth } from "./context/AuthContext";
import Login from "./components/login/Login";

const App = () => {
  // const context = useAuth();
  // const { currentUser } = context;

  // const renderLogin = () => {
  //   if (currentUser) {
  //     return <div> { !currentUser && <Login /> }</div>;
  //   }
  //   return
  // }
  
  return (
  <div><Login /></div>
  );
};

export default App;
