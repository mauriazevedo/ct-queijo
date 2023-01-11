var express = require("express");
var router = express.Router({ mergeParams: true });
const GetUser = require("../db/users/users.getUser");

router.get("/", function (req, res) {
  const userId = req.params.id;
  console.log(userId);
  GetUser(userId, res);
});

module.exports = router;
