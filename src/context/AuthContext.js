import React, { useContext, useState, useEffect } from "react";
import { auth, provider /* facebookProvider */ } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  // const loginWithFacebook = () => {
  //     auth.signInWithPopup(facebookProvider)
  // }

  const logout = () => {
    auth.signOut();
    setCurrentUser({});
  };

  const resetPassword = (email) => auth.sendPasswordResetEmail(email);

  const updateEmail = (email) => currentUser.updateEmail(email);

  const updatePassword = (password) => currentUser.updateEmail(password);

  const value = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
    loginWithGoogle,
    // loginWithFacebook,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
