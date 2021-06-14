import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillsArea: {
    padding: theme.spacing(3),
    marginBottom: 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #00bfa5",
    },
  },
  skillDivider: {
    marginTop: 20,
    marginBottom: 20,
  },
  skillSet: {
    marginTop: 20,
  },
  skillContentArea: {
    marginTop: 10,
  },
  skillSetItems: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#ffff8d",
    padding: 10,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsBackend: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#bdbdbd",
    padding: 10,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsDevOps: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#81d4fa",
    padding: 10,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsShopify: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#a5d6a7",
    padding: 10,
    fontsize: 20,
    fontWeight: "bold",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.skillsArea} elevation={3}>
            <h2>Frontend Development</h2>
            <Divider className={classes.skillDivider} />
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>Javascript</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>HTML</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>CSS</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>React</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>Vue</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>Material UI</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>Bootstrap</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItems}>Tailwind css</div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.skillsArea} elevation={3}>
            <h2>Backend Development</h2>
            <Divider className={classes.skillDivider} />
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>
                  Python(Django)
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>
                  Python(Flask)
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>Node.js</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>Express</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>SQL</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>REST APIs</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>MongoDb</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsBackend}>GIT</div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.skillsArea} elevation={3}>
            <h2>DevOps</h2>
            <Divider className={classes.skillDivider} />
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>CI/CD</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>
                  Github Actions
                </div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>Gitlab</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>Docker</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>Azure</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>AWS</div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>Digital Ocean</div>
              </Grid>
              <Grid item md={4}>
                <div className={classes.skillSetItemsDevOps}>
                  NGINX(Web Server)
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.skillsArea} elevation={3}>
            <h2>Shopify Services</h2>
            <Divider className={classes.skillDivider} />
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Store Development
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Theme Customization
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Product Setup and Maintenance
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Product Import
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.skillContentArea}>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Store Management
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.skillSetItemsShopify}>
                  Customer Support
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Skills);
