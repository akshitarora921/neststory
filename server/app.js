var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan")
var router = require("./routes/routes")
// const fileUpload = require("express("");

//Routes
// var newsheaderRouter = require("./routes/newsheader")
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var bannerRouter = require("./routes/banner");
// var latestStoriesRouter = require("./routes/latestStories");
// var innovationRouter = require("./routes/innovation");
// var entrepreneurshipRouter = require("./routes/entrepreneurship");
// var videosRouter = require("./routes/videos");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//cors policies
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// app.use(fileUpload());npm
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routers
app.use("/", router)
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/newsheader", newsheaderRouter)
// app.use("/banner", bannerRouter);
// app.use("/lateststories", latestStoriesRouter);
// app.use("/innovation", innovationRouter);
// app.use("/entrepreneurship", entrepreneurshipRouter);
// app.use("/videos", videosRouter);

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
