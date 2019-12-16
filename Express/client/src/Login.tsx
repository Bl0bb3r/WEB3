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
                console.log(Object.values(res.data)[0]);
                let key = Object.values(res.data)[0];
                sessionStorage.setItem(JSON.stringify(key), User.Email);
                window.location.href = "/";
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
