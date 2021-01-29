import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Auth from "./auth/auth";
import Home from "./home/Home";

export const Main = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;
