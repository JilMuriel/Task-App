import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./auth/auth";
import Home from "./home/Home";
import PrivateRoute from "./private-route";

export const Main = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};

export default Main;
