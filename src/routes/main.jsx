import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./auth/auth";
import Home from "./home/Home";

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};

export default Main;
