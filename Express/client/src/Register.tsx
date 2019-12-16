import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { RegisterForm } from "./RegisterForm";

const Register = () => {
  return (
    <div>
      <RegisterForm
        onSubmit={({ Firstname, Lastname, Nickname, Email, Password }) => {
          // probably going to send to API endpoint and register user
          console.log(Firstname, Lastname, Nickname, Email, Password);
        }}
      />
    </div>
  );
};
export default Register;
