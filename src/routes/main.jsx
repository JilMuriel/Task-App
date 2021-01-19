import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/Home";

export const Main = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Main;
