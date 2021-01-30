import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import InputField from "../../components/input-field/Input-Field";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    width: "500px",
    margin: "auto",
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
});
export const Login = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  return (
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
          Don't have an account? <Link to="/auth/register">Sign up</Link>
        </Typography>
        <Typography className={classes.desc}>Forgot password?</Typography>
      </Box>
      {/* <Box display="flex" justifyContent="center" className={classes.divider}>
        <Typography>OR</Typography>
      </Box> */}

      {/* <Grid container display="flex" spacing={2} alignItems="center">
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
      </Grid> */}
    </Box>
  );
};

export default Login;
