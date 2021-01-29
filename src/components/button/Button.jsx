import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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

export const Button = () => {
  const classes = useStyles();
  return <ButtonBase className={classes.signInBtn}>{children}</ButtonBase>;
};

export default Button;
