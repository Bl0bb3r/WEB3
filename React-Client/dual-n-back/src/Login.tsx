import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Login">
        <div style={{ textAlign: "center" }}>
          <LoginForm
            onSubmit={({ Email, Password }) => {
              // probably going to send to API endpoint and check if user exists
              console.log(Email, Password);
            }}
          ></LoginForm>
        </div>
      </div>
    );
  }
}
