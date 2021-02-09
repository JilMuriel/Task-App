import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Login from "./login";
import Register from "./register";

const useStyles = makeStyles({
  authLayout: {
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    color: "#3A3A3A",
    fontWeight: "600",
    marginBottom: "20px",
  },
  desc: {
    fontSize: "17px",
    color: "#3A3A3A",
    marginBottom: "20px",
  },
  login: {
    minWidth: "562px",
    margin: "auto",
  },
  leftWrapper: {
    background: "#2755EE",
  },
});

export const Auth = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container className={classes.authLayout}>
      {matches ? (
        <Grid item xs="6" className={classes.leftWrapper}></Grid>
      ) : null}
      <Grid container item display="flex" alignItems="center" xs="6">
        <Switch>
          <Route exact path="/auth/">
            <Login />
          </Route>
          <Route exact path="/auth/register">
            <Register />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Auth;
