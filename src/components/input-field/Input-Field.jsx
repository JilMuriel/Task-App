import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { InputBase, FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      color: "#3A3A3A",
      marginTop: theme.spacing(3),
    },
  },
  input: {
    marginTop: "7px",
    borderRadius: 4,
    position: "relative",
    marginBottom: "5px",
    backgroundColor: theme.palette.common.white,
    border: "2px solid #D1D1D1",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#4F75F1",
    },
  },
}))(InputBase);

const useStyles = makeStyles({
  label: {
    fontSize: "22px",
    color: "#3A3A3A",
  },
  formMessage: {
    fontSize: "14px;",
    fontWeight: "700",
    color: "red",
  },
});

export const InputField = ({ err, ...props }) => {
  const classes = BootstrapInput;
  const labelClasses = useStyles();
  return (
    <FormControl className={classes.margin} fullWidth display="block">
      <InputLabel
        shrink
        focused={false}
        className={labelClasses.label}
        htmlFor={props.id}
        {...props}
      >
        {props.label}
      </InputLabel>
      <BootstrapInput {...props} />
      {err ? <span className={labelClasses.formMessage}>{err}</span> : null}
    </FormControl>
  );
};

export default InputField;
