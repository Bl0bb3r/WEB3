import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import RegisterForm from "./RegisterForm";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Register">
        {/* login form test */}
        <div style={{ textAlign: "center" }}>
          <RegisterForm
            onSubmit={({ Firstname, Lastname, Nickname, Email, Password }) => {
              // probably going to send to API endpoint and check if user exists
              console.log(Firstname, Lastname, Nickname, Email, Password);
            }}
          ></RegisterForm>
        </div>
      </div>
    );
  }
}
