var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const addUser = require("./../db/users/users.addUser");

router.post("/", function (req, res) {
  console.log(req.body);

  const name = req.body.name;
  const lastname = req.body.lastname;
  const organization = req.body.organization;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    addUser(name, lastname, organization, email, hash, res);
  });
});

module.exports = router;
