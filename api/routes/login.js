var express = require("express");
var router = express.Router();
const encryptPassword = require("encrypt-password");
const Login = require("../db/users/users.login");

router.post("/", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const hash = encryptPassword(password, {
    min: 1,
    signature: "hs278ty817jsh",
  });

  Login(email, hash, res);
});

module.exports = router;
