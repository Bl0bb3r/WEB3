import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { RegisterForm } from "./RegisterForm";
import axios from "axios";

const Register = () => {
  return (
    <div>
      <RegisterForm
        onSubmit={({ Firstname, Lastname, Nickname, Email, Password }) => {
          var User = {
            Firstname: Firstname,
            Lastname: Lastname,
            Nickname: Nickname,
            Email: Email,
            Password: Password
          };
          console.log(User);
          axios
            .post(
              "http://localhost:5000/api/user/register",
              { ...User },
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            )
            .then(res => {
              window.location.href = "/login";
              console.log(res);
              console.log(res.data);
            });
        }}
      />
    </div>
  );
};
export default Register;
