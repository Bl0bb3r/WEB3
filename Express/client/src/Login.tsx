import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { LoginForm } from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <LoginForm
        onSubmit={({ Email, Password }) => {
          // probably going to send to API endpoint and check if user exists
          console.log(Email, Password);
        }}
      />
    </div>
  );
};
export default Login;
