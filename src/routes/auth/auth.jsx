import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import InputField from "../../components/input-field/Input-Field";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  authLayout: {
    minHeight: "100vh",
  },
  title: {
    fontSize: "46px",
    color: "#3A3A3A",
    fontWeight: "600",
  },
  desc: {
    fontSize: "18px",
    color: "#3A3A3A",
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

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  return (
    <Grid container className={classes.authLayout}>
      <Grid item xs="6" className={classes.leftWrapper}></Grid>
      <Grid container item display="flex" alignItems="center" xs="6">
        <Box className={classes.login}>
          <Typography variant="h1" className={classes.title}>
            Sign In
          </Typography>
          <Typography className={classes.desc}>
            Enter your email and password to login on your dashboard.
          </Typography>
          <form>
            <InputField
              id="username-field"
              label="Username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputField
              id="password-field"
              label="Password"
              type="password"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign In</button>
          </form>
          <Box>
            <Typography className={classes.desc}>
              Don't have an account? Sign up
            </Typography>
            <Typography className={classes.desc}>Forgot password?</Typography>
          </Box>
          <Box>
            <Typography>OR</Typography>
          </Box>
          <Box>
            <button>Facebook</button>
            <button>Google</button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
