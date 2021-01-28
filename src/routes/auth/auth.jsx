import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import InputField from "../../components/input-field/Input-Field";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonBase from "@material-ui/core/ButtonBase";

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
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
  },
  forgotPassword: {
    fontSize: "17px",
  },
  signInBtn: {
    width: "100%",
    height: "50px",
    fontSize: "17px",
    backgroundColor: "#4F75F1",
    borderRadius: "4px",
    color: "white",
    boxShadow: " 0 4px 13px rgba(0,0,0,0.27)",
    marginBottom: "25px",
  },
  btnFb: {
    width: "100%",
    height: "50px",
    fontSize: "17px",
    borderRadius: "4px",
    boxShadow: "0 4px 13px rgba(0,0,0,0.27)",
    background: "#3b5998",
    color: "white",
  },
  btnGoogle: {
    width: "100%",
    height: "50px",
    fontSize: "17px",
    borderRadius: "4px",
    boxShadow: "0 4px 13px rgba(0,0,0,0.27)",
    background: "white",
  },
  divider: {
    margin: "40px 0 60px",
    fontSize: "17px",
    color: "#8A8A8A",
  },
});

export const Auth = () => {
  const classes = useStyles();

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container className={classes.authLayout}>
      {matches ? (
        <Grid item xs="6" className={classes.leftWrapper}></Grid>
      ) : null}

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
              placeholder="Ex. JohnDoe"
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputField
              id="password-field"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonBase className={classes.signInBtn}>Sign In</ButtonBase>
          </form>
          <Box>
            <Typography className={classes.desc}>
              Don't have an account? Sign up
            </Typography>
            <Typography className={classes.desc}>Forgot password?</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            className={classes.divider}
          >
            <Typography>OR</Typography>
          </Box>

          <Grid container display="flex" spacing={2} alignItems="center">
            <Grid item xs={6}>
              <ButtonBase className={classes.btnFb}>
                Sign in with Facebook
              </ButtonBase>
            </Grid>
            <Grid item xs={6}>
              <ButtonBase className={classes.btnGoogle}>
                Sign in with Google
              </ButtonBase>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
