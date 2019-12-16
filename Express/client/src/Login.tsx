import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { LoginForm } from "./LoginForm";
import "./Login.css";
import axios from "axios";

const Login = () => {
  return (
    <div>
      <LoginForm
        onSubmit={({ Email, Password }) => {
          // probably going to send to API endpoint and check if user exists
          console.log(Email, Password);
          var User = {
            Email: Email,
            Password: Password
          };

          axios
            .post(
              "http://localhost:5000/api/user/login",
              { ...User },
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            )
            .then(res => {
              if (res.status == 200) {
                //window.location.href = "/login";
                console.log(res);
                console.log(res.data);
              } else {
                window.location.href = "/login";
              }
            });
        }}
      />
    </div>
  );
};
export default Login;
