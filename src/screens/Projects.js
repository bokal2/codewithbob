import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

import kenindiaPhoto from "./images/kenindia-insurance.jpg";
import cartPhoto from "./images/shopping.jpg";
import fibrePhoto from "./images/fibre.jpg";
import mshauriPhoto from "./images/mental.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillsArea: {
    padding: theme.spacing(3),
    marginBottom: 20,
    textAlign: "center",
    height: 400,
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  media: {
    height: 300,
  },
  title: {
    textAlign: "center",
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
    backgroundColor: "#ffeb3b",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsBackend: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#bdbdbd",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsDevOps: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#81d4fa",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsShopify: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#a5d6a7",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  cover: {
    width: 151,
  },
  subtitle: {
    marginTop: 5,
    fontStyle: "italic",
    fontSize: 18,
  },
  cardActions: {},
  actionIcon: {
    marginLeft: "auto",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12} className={classes.title}>
          <Typography variant="h4" color="secondary">
            My Recent Work
          </Typography>
          <div className={classes.subtitle}>
            Here are a few design projects I've worked on recently. Want to see
            more? Email me.
          </div>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={kenindiaPhoto}
                title="E-portal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  E-Portal - Pension Management system
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This system helps in processing and managing of pension
                  schemes for life insurance companies. The system has Pension
                  Scheme Members, Pension Scheme Trustees, Annuitants, and
                  Individual Life Policies modules.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button size="small" color="primary">
                Python(django)
              </Button>
              <Button size="small" color="primary">
                Javascript
              </Button>
              <Button size="small" color="primary">
                Oracle DB
              </Button>
              <Button size="small" color="primary">
                Bootstrap
              </Button>
              <IconButton
                aria-label="view"
                className={classes.actionIcon}
                href="https://eportal.kenindia.com/"
                target="_blank"
              >
                <LaunchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={cartPhoto}
                title="Dexdrop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dexdrop - Online Store
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A complete ecommerce system for liquor stores with product
                  management, store management, cart processing, payment
                  integration, shipping management and Admin.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button size="small" color="primary">
                React
              </Button>
              <Button size="small" color="primary">
                Node.js
              </Button>
              <Button size="small" color="primary">
                Express
              </Button>
              <Button size="small" color="primary">
                MongoDb
              </Button>
              <IconButton
                aria-label="view"
                className={classes.actionIcon}
                href="https://dexdrop.co.ke/"
                target="_blank"
              >
                <LaunchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={fibrePhoto}
                title="Optics360"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Optics360 - Fibre networks management system
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A Mobile and Web application for for designing, planning and,
                  documenting existing and new fibre networks
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button size="small" color="primary">
                python(django)
              </Button>
              <Button size="small" color="primary">
                Vue.js
              </Button>
              <Button size="small" color="primary">
                Openlayers
              </Button>
              <Button size="small" color="primary">
                Node.js
              </Button>
              <Button size="small" color="primary">
                Postgis
              </Button>
              <Button size="small" color="primary">
                Docker
              </Button>
              <IconButton
                aria-label="view"
                className={classes.actionIcon}
                href="https://planning.soliton.co.ke/"
                target="_blank"
              >
                <LaunchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={mshauriPhoto}
                title="mshauri"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mshauri - online forum
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An online forum for people with mental health difficulties to
                  connect and share mental health strategies and positive
                  help-seeking experiences.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button size="small" color="primary">
                Node.js
              </Button>
              <Button size="small" color="primary">
                React
              </Button>
              <Button size="small" color="primary">
                Express
              </Button>
              <Button size="small" color="primary">
                MongoDb
              </Button>
              <Button size="small" color="primary">
                Material UI
              </Button>
              <IconButton
                aria-label="view"
                className={classes.actionIcon}
                href="https://github.com/bokal2/mshauri-app"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Projects);
