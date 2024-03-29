var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const Initialize = require("./db/initialize");

Initialize();

var testAPIRouter = require("./routes/testAPI");
var addUserRouter = require("./routes/addUser");
var login = require("./routes/login");
var getUserRouter = require("./routes/getUser");
var addOrderRouter = require("./routes/addOrder");
var getOrdersRouter = require("./routes/getOrders");
var getOrdersbyStatusRouter = require("./routes/getOrdersByStatus");
var updateOrderStatusRouter = require("./routes/updateOrderStatus");

var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  app.use(cors());
  next();
});
app.use(cors({ origin: true, credentials: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/testAPI", testAPIRouter);
app.use("/add-user", addUserRouter);
app.use("/login", login);
app.use("/user/:id", getUserRouter);
app.use("/add-order", addOrderRouter);
app.use("/get-orders/:id", getOrdersRouter);
app.use("/get-orders-by-status/:status", getOrdersbyStatusRouter);
app.use("/update-order-status", updateOrderStatusRouter);

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
