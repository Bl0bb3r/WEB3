import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

//inspired by https://material-ui.com/components/app-bar/
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    buttons: {
      float: "right"
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  if (sessionStorage.length > 0) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Dual-N-Back
            </Typography>
            <Button
              className={classes.buttons}
              onClick={event => (
                sessionStorage.clear(), (window.location.href = "/")
              )}
              color="inherit"
            >
              Logout
            </Button>
            <Button
              className={classes.buttons}
              onClick={event => (window.location.href = "/")}
              color="secondary"
            >
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Dual-N-Back
            </Typography>
            <Button
              className={classes.buttons}
              onClick={event => (window.location.href = "/login")}
              color="inherit"
            >
              Login
            </Button>
            <Button
              className={classes.buttons}
              onClick={event => (window.location.href = "/register")}
              color="inherit"
            >
              Register
            </Button>
            <Button
              className={classes.buttons}
              onClick={event => (window.location.href = "/")}
              color="secondary"
            >
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Dual-N-Back
//           </Typography>
//           <Button href="/login" color="inherit">
//             Login
//           </Button>
//           <Button href="/register" color="inherit">
//             Register
//           </Button>
//           <Button href="/" color="secondary">
//             Home
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
