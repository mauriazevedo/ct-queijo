var express = require("express");
var router = express.Router();
const encryptPassword = require("encrypt-password");
const addUser = require("./../db/users/users.addUser");

router.post("/", function (req, res) {
  console.log(req.body);

  const name = req.body.name;
  const lastname = req.body.lastname;
  const organization = req.body.organization;
  const email = req.body.email;
  const password = req.body.password;
  const hash = encryptPassword(password, "hs278ty817jsh");
  addUser(name, lastname, organization, email, hash, res);
});

module.exports = router;
