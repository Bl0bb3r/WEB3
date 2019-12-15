import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "./App.css";
import ButtonAppBar from "./Appbar";

//import logo from './logo.svg';

export interface IState {
  gameRunning: boolean;
  gridSize: number;
  score: number;
}

//

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <div className="App">
        <ButtonAppBar />
      </div>
    );
  }
}

export default App;
