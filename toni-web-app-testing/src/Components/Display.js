import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const usePaper = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

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

export default function Display(props) {
  const classes = useStyles();
  const paper = usePaper();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      ></AppBar>
      <Container
        maxWidth="sm"
        component="main"
        className={classes.displayContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          At Bat Board
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          component="p"
        >
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
        <Paper className={paper.root}>
          <Typography variant="h5" component="h3">
            Balls Count
          </Typography>
          <Typography component="p">{props.balls}</Typography>
          <Typography variant="h5" component="h3">
            Strikes Count
          </Typography>
          <Typography component="p">{props.strikes}</Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
