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

const useStyles = makeStyles(theme => ({
  card: {
    marginbottom: 12,
    marginright: 12,
    padding: 20,
    minWidth: 350,
    maxWidth: 550,
    minHeight: 250,
    textAlign: "center"
  },
  cardhome: {
    marginbottom: 12,
    marginright: 12,
    padding: 20,
    minWidth: 1250,
    maxWidth: 1500,
    minHeight: 250,
    textAlign: "center"
  },

  redirection: {
    marginTop: 20
  },

  desc: {
    marginTop: 10
  },
  cardtitle: {
    fontweight: 700,
    marginbottom: 20,
    color: "#004765"
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
    title: "Play Dual-N-Back",
    description: ["Play Dual-N-Back (without highscore)"],
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

const HomeLoggedIn = [
  {
    title: "Welcome back",
    description: ["Welcome back start playing now"],
    buttonText: "Click here to start playing",
    route: "/game"
  }
];

//inpspired by https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/pricing/Pricing.js
//https://material-ui.com/getting-started/templates/album/
const App: React.FC = () => {
  const classes = useStyles();
  if (sessionStorage.length > 0) {
    return (
      <div className="App">
        <ButtonAppBar />
        <Container
          maxWidth="lg"
          style={{ justifyItems: "center", paddingTop: "150px" }}
        >
          {/* End hero unit */}
          <Grid container style={{ justifyItems: "center" }}>
            {HomeLoggedIn.map(HomeLoggedInto => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card className={classes.cardhome}>
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
                      {HomeLoggedInto.title}
                    </Typography>
                    <br />
                    <Typography className={classes.desc}>
                      {HomeLoggedInto.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Button
                      className={classes.redirection}
                      href={HomeLoggedInto.route}
                      size="small"
                      color="primary"
                    >
                      {HomeLoggedInto.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ButtonAppBar />
        <Container maxWidth="lg" style={{ paddingTop: "150px" }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {homeInfo.map(homeInfos => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
                    <br />
                    <Typography className={classes.desc}>
                      {homeInfos.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Button
                      className={classes.redirection}
                      href={homeInfos.route}
                      size="small"
                      color="primary"
                    >
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
  }
};

export default App;
