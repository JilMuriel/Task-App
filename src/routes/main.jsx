import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Auth from "./auth/auth";
import Home from "./home/Home";
import PrivateRoute from "./private-route";

export const Main = () => {
  console.log("env", process.env);
  return (
    <AuthProvider>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </AuthProvider>
  );
};

export default Main;
