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
  profilSize: {
    width: 150,
    height: 150,
    border: "5px solid #00bfa5",
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
    fontSize: 28,
    fontWeight: 400,
    color: theme.palette.secondary.main,
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
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 400,
    padding: 40,
    color: "#e0e0e0",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Paper className={fixedHeightPaper} elevation={3}>
      <div>
        <Avatar
          alt="Remy Sharp"
          src={profilePhoto}
          className={classes.profilSize}
        />
      </div>
      <div className={classes.nameContainer}>
        <div className={classes.mainName}>Erick B. Okal</div>
        <div className={classes.jobTitle}>Senior Software Engineer</div>
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
      <div className={classes.profileContent}>
        I'm an enthusiastic and forward-looking Software Engineer with 5 years
        background in creating and executing innovative software solutions to
        enhance business productivity. Highly experienced in all aspects of the
        software development lifecycle and end-end project management, from
        concept through to development and delivery.
      </div>
    </Paper>
  );
};

export default AboutMe;
