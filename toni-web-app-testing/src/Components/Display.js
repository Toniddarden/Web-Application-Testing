import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FooterComp from "./Footer";
import Dashboard from './Dashoboard';



const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  displayContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  }
}));




export default function Display() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        {/* <Toolbar className={classes.toolbar}>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}

            >
              Dashboard
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
             
            >
              Board
            </Link>
          </nav>
        </Toolbar> */}
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.displayContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          At Bat Board
        </Typography>

        <Typography variant="h6"
          align="center"
          color="textPrimary"
          component="p">
          Rules
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Balls and strikes reset to 0 when a player reaches 3 strikes or 4
          balls. Balls and strikes reset to 0 when a hit is recorded. a foul
          increases strikes up to 2. With no strikes, a foul makes it 1 strike.
          With 1 strike, a foul makes it 2 strikes. With two strikes a foul has
          no effect, count stays at 2 strikes.
        </Typography>
      </Container>
      <Dashboard />
      <FooterComp />
    </React.Fragment>
  );
}
