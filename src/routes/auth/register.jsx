import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import InputField from "../../components/input-field/Input-Field";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
//Spinner
import CircularProgress from "@material-ui/core/CircularProgress";

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

export const Loading = () => {
  let classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <CircularProgress />
    </Box>
  );
};

export const Register = () => {
  const { signup, currentUser, logout } = useAuth();
  const history = useHistory();

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passWord !== confirmPassWord) {
      return setPasswordValidation("Password does not match");
    }
    try {
      setPasswordValidation("");
      setLoading(true);
      await signup(userEmail, passWord);
      history.push("/");
    } catch {
      console.log("error");
    }
    setLoading(false);
  }

  return (
    <Box className={classes.login}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h1" className={classes.title}>
            Register
          </Typography>
          <Typography className={classes.desc}>
            Enter your email and password to login on your dashboard.
          </Typography>

          <form onSubmit={handleSubmit}>
            <InputField
              id="username-field"
              label="Email"
              type="text"
              value={userEmail}
              placeholder="Ex. JohnDoe@gmail.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <InputField
              id="password-field"
              label="Password"
              type="password"
              value={passWord}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              id="confirm-password-field"
              label="Confirm Password"
              type="password"
              value={confirmPassWord}
              placeholder="Confirm you password"
              onChange={(e) => setConfirmPassWord(e.target.value)}
              err={passwordValidation}
            />
            <button>Sign me up</button>
          </form>
        </>
      )}
    </Box>
  );
};

export default Register;
