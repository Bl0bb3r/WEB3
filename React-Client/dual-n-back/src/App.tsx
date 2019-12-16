import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import ButtonAppBar from "./Appbar";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//import logo from './logo.svg';

//TODO need to include the theme provider higher order component I think
//https://material-ui.com/styles/basics/#higher-order-component-api
const useStyles = makeStyles(theme => ({
  card: {
    marginbottom: 12,
    marginright: 12,
    padding: 20
  },
  whitecardblue: {
    color: "#004562"
  },

  cardtextwhite: {
    color: "#5d6f7d"
  },

  specialpurple: {
    background: "#a2238e"
  },

  subpink: {
    color: "#e1a7da"
  },

  specialblue: {
    background: "#004765"
  },

  subblue: {
    color: "#71a1b8"
  },

  whitetext: {
    color: "white"
  },

  cardtitle: {
    fontweight: 700,
    marginbottom: 20
  }
}));

const homeInfo = [
  {
    title: "Login",
    description: ["Login to start playing Dual-N-Back"],
    buttonText: "Login here",
    route: "/login"
  },
  {
    title: "Highscores",
    subheader: "Smartest players",
    description: ["View the best Dual-N-Back players"],
    buttonText: "View List(this routes to the game atm)",
    route: "/game"
  },
  {
    title: "Registration",
    description: ["New user?"],
    buttonText: "Click here to get started",
    route: "/register"
  }
];

//inpspired by https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/pricing/Pricing.js
//https://material-ui.com/getting-started/templates/album/
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <ButtonAppBar />
      <Container maxWidth="md" style={{ paddingTop: "80px" }}>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {homeInfo.map(homeInfos => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent>
                  <Typography
                    className={classes.cardtitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {homeInfos.title}
                  </Typography>
                  <Typography>{homeInfos.subheader}</Typography> <br />
                  <Typography>{homeInfos.description}</Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button href={homeInfos.route} size="small" color="primary">
                    {homeInfos.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
