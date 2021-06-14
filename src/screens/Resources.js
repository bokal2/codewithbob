import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    height: 600,
    padding: 20,
  },

  profileContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "3px solid",
    cursor: "pointer",
    height: 300,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 22,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 400,
    padding: 10,
    color: "#e0e0e0",
    "&:hover": {
      color: "#ffff8d",
    },
  },
}));

const Resources = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Paper className={fixedHeightPaper} elevation={3}>
      <div className={classes.profileContent}>
        <div>Comming Soon</div>
        <Typography>Page under construction</Typography>
      </div>
    </Paper>
  );
};

export default Resources;
