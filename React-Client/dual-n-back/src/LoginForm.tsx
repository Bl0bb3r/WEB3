import { Button, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Form, Formik } from "formik";
import * as React from "react";
import "./Login.css";

interface LoginValues {
  Email: string;
  Password: string;
}

interface Props {
  onSubmit: (values: LoginValues) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

//inspired by https://www.youtube.com/watch?v=6VmVYi9yrAA
const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ Email: "", Password: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <TextField
              name="Email"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
          </div>
          <br />
          <div>
            <TextField
              name="Password"
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="password"
            />
          </div>
          <br />
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
