import React from "react";
import "firebase/compat/auth";
import { useAuth } from "./context/AuthContext";
// import Login from "./components/login/Login";
// import Navbar from "./components/navbar/Navbar";
// import useSpoonacularRecipies from "./hooks/useSpoonacular";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const context = useAuth();
  // const { currentUser } = context;
  // const [data, setData] = useState();

  // const { isLoading, error, recipies } = useSpoonacularRecipies([
  //   { query: "addRecipieInformation", value: true },
  //   { query: "cuisine", value: "Italian" },
  // ]);

  return (
    <div>
      {/* <Login /> */}
      {/* <Navbar /> */}
      <CardContainer />
    </div>
  );
};

export default App;
