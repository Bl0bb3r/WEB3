var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

var indexRouter = require("./app_api/routes/index");
var usersRouter = require("./app_api/routes/users");
var routesApi = require("./app_api/routes/index");
var authRoute = require("./app_api/routes/auth");
var workoutRoute = require("./app_api/routes/workout");

var app = express();
app.use(cors({ allowedHeaders: "*" }));
app.options("*", cors());

//DB config/connection
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(logger("dev"));
app.use(express.json());
//bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Changed for deployment
app.use(express.static(path.resolve(__dirname, "build")));

//Route middlewares
app.use("/api/user", authRoute);
app.use("/api", routesApi);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/workout", workoutRoute);
app.get("*", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname });
});

//app.use(require("./corsfix"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
