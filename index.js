var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//custom import
const mongoose = require("mongoose");
const methodOverride = require("method-override"); //for override http put and delete
const session = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();
const serverless = require("serverless-http");
var router = require("express").Router();
let MongoDBStore = require("connect-mongodb-session")(session);

//connect to mongoDb compass
// mongoose
//   .connect("mongodb://127.0.0.1:27017/staycation")
//   .then(() => console.log("MongoDB Connected ..."))
//   .catch((err) => console.log(err));

//connect to mongo atlas
mongoose
  .connect(
    "mongodb+srv://staycation:staycationrahasia123@cluster0.cgahxjp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected ..."))
  .catch((err) => console.log(err));

//session
let store = new MongoDBStore({
  uri: "mongodb+srv://staycation:staycationrahasia123@cluster0.cgahxjp.mongodb.net/?retryWrites=true&w=majority",
  collection: "sessionId",
});
// Catch errors
store.on("error", function (error) {
  console.log(error);
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

//custom middleware routes
const adminRouter = require("./routes/admin");
const apiRouter = require("./routes/api");

var app = express();

//serverless netlify
app.use("/.netlify/functions/", router);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//custom
const oneDay = 24 * 60 * 60 * 1000;
app.use(methodOverride("_method"));

// Initialize sesssion storage.
app.use(
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//file static (sb admin)
app.use(
  "/sb-admin-2",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

//custom routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/api/v1/member", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
module.exports.handler = serverless(app);

//dev
