import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import profilePhoto from "./images/profile.jpeg";

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 30,
    marginRight: 30,
    height: 600,
    padding: 20,
  },
  nameContainer: {
    marginTop: 20,
    textAlign: "center",
  },
  mainName: {
    fontSize: 25,
    fontWeight: 400,
    fontStyle: "italic",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 10,
  },
  socialIcons: {
    color: "theme.palette.primary.main",
  },
  contentDivider: {
    marginTop: 15,
    marginBottom: 15,
  },
  profileContent: {
    border: "2px solid",
    cursor: "pointer",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 400,
    padding: 20,
    color: "#e0e0e0",
    "&:hover": {
      color: "#ffff8d",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Paper className={fixedHeightPaper} elevation={3}>
      <div className={classes.nameContainer}>
        <div className={classes.jobTitle}>
          Phone Number:{"  "}
          <b>
            <span>+254719383060</span>
          </b>
        </div>
        <div className={classes.jobTitle}>
          Email:{"  "}
          <b>
            <span>bobokal98@gmail.com</span>
          </b>
        </div>
        <div className={classes.socialIcons}>
          <IconButton href="https://github.com/bokal2" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/erick-bob-10381762/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </div>
        <Divider
          variant="fullWidth"
          light="false"
          className={classes.contentDivider}
        />
      </div>
      <div className={classes.profileContent}>Let's Talk!</div>
    </Paper>
  );
};

export default Contact;
