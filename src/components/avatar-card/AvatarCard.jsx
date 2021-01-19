import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { deepOrange } from "@material-ui/core/colors";
import "./AvatarCard.css";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export const AvatarCard = ({ username, email }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid classsName="avatar-card__image" item auto>
        <Avatar className={`${classes.orange} avatar-card__image`}>J</Avatar>
      </Grid>
      <Grid classsName="avatar-card__info" item auto>
        <Typography
          className="avatar-card__username"
          fontWeight="fontWeightRegular"
          m={1}
        >
          {username}
        </Typography>
        <Typography className="avatar-card__email">{email}</Typography>
      </Grid>
    </Grid>
  );
};

export default AvatarCard;
