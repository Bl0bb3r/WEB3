import { Button, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik } from "formik";
import * as React from "react";
import "./Login.css";
import ButtonAppBar from "./Appbar";

interface RegisterValues {
  Firstname: string;
  Lastname: string;
  Nickname: string;
  Email: string;
  Password: string;
}

interface Props {
  onSubmit: (values: RegisterValues) => void;
}

//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white"
  },
  avatar: {
    marginTop: "20px",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    padding: "30px",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

//inspired by https://www.youtube.com/watch?v=6VmVYi9yrAA
//and design code taken from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        Firstname: "",
        Lastname: "",
        Nickname: "",
        Email: "",
        Password: ""
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <>
          <ButtonAppBar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register as new user
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Firstname"
                  label="Firstname"
                  type="Firstname"
                  id="Firstname"
                  autoComplete="current-Firstname"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Lastname"
                  label="Lastname"
                  type="Lastname"
                  id="Lastname"
                  autoComplete="current-Lastname"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Nickname"
                  label="Nickname"
                  type="Nickname"
                  id="Nickname"
                  autoComplete="current-Nickname"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  href="/login"
                >
                  Sign In
                </Button>
                <br />

                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Link href="/" variant="body2">
                    return home
                  </Link>
                </Typography>
              </form>
            </div>
          </Container>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
