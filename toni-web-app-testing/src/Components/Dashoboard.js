import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Dashboard = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Dashboard
          </Typography>
          <Typography>
            Ball{" "}
            <Button onClick={props.ball} size="small" color="secondary">
              Add
            </Button>
          </Typography>
          <Typography>
            Strike{" "}
            <Button onClick={props.strike} size="small" color="secondary">
              Add
            </Button>
          </Typography>
          <Typography>
            Hit{" "}
            <Button onClick={props.hit} size="small" color="secondary">
              Add
            </Button>
          </Typography>
          <Typography>
            Foul{" "}
            <Button onClick={props.foul} size="small" color="secondary">
              Add
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
