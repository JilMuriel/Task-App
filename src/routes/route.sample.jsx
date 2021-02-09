import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "../components/dashboard";
import { Auth } from "../components/auth";

export function RouteSample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <h1>Welcome To Home</h1>
        </Route>
      </Switch>
    </div>
  );
}
