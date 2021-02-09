import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();
  async function signup(email, password) {
    return await auth.createUserWithEmailAndPassword(email, password);
    history.push("/");
  }
  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
