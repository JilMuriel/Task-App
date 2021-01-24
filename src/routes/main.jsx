import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./auth/auth";
import Home from "./home/Home";

export const Main = () => {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Main;
