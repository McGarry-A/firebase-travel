import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const actions = useAuth();

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "0 auto",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions
      .login(email, password)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        if (error) {
          console.log("error logging in");
        }
      });
  };

  const renderLogin = () => {
    return (
      <div>
        <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <p style={{ fontSize: "10px", textAlign: "center" }}>
          Dont have an account?
          <span onClick={() => setSignUp(true)}> Click here </span>
          to sign up!
        </p>
      </div>
    );
  };

  
  const renderSignIn = () => {
    return (
      <div>
        <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          <label>Please Confirm Password</label>
          <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <p style={{ fontSize: "10px", textAlign: "center" }}>
          Already have an account?
          <span onClick={() => setSignUp(false)}> Click here </span>
          to log in!
        </p>
      </div>
    );
  };

  return (
        <div>
            { signUp ? renderSignIn() : renderLogin() }
        </div>
    )
};

export default Login;
