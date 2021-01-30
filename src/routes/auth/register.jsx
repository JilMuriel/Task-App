import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import InputField from "../../components/input-field/Input-Field";
// import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth } from "../../contexts/AuthContext";

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

export const Register = () => {
  const { signup, currentUser, logout } = useAuth();

  const [passwordMatch, setPasswordMatch] = useState(false);
  console.log(
    "process.env.REACT_APP_FIREBASE_API_KEY",
    process.env.REACT_APP_FIREBASE_API_KEY
  );
  const classes = useStyles();
  //   const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  console.log("currentUser", currentUser?.email);
  async function handleSubmit(e) {
    e.preventDefault();
    // signup(userName, passWord);
    if (passWord !== confirmPassWord) {
      setPasswordMatch(true);
    }

    try {
      await signup(userEmail, passWord);
    } catch {
      console.log("error");
    }
  }
  return (
    <Box className={classes.login}>
      <Typography variant="h1" className={classes.title}>
        Register
      </Typography>
      <Typography className={classes.desc}>
        {/* Enter your email and password to login on your dashboard. */}
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* <InputField
          id="name-field"
          label="Name"
          type="text"
          value={fullName}
          placeholder="Ex. John Doe"
          onChange={(e) => setFullName(e.target.value)}
        /> */}
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
          placeholder="Enter your password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <InputField
          id="confirm-password-field"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassWord}
          onChange={(e) => setConfirmPassWord(e.target.value)}
          error={passwordMatch}
          autoComplete="off"
        />
        {/* <Button variant="contained" color="primary">
          Primary
        </Button> */}
        <button>sign up</button>
        {/* <ButtonBase className={classes.signInBtn}>Sign Up</ButtonBase> */}
        {/* <button onClick={handleSubmit}>asdasd</button> */}
      </form>
      <Box>
        <Typography className={classes.desc}>
          Already have an account? <Link to="/auth/register">Sign in</Link>
        </Typography>
        <button onClick={logout}>logout</button>
      </Box>
    </Box>
  );
};

export default Register;
