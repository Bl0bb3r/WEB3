import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import FullGame from "./Fullgame";
import "./index.css";
import Login from "./Login";
import Register from "./Register";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme();

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/game" component={FullGame} />
      </div>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
