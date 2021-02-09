import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Auth from "./auth/auth";
import Home from "./home/Home";
import PrivateRoute from "./private-route";

export const Main = () => {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
      </Switch>
    </AuthProvider>
  );
};

export default Main;
