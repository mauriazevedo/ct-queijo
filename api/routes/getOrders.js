var express = require("express");
var router = express.Router({ mergeParams: true });
const GetOrders = require("../db/orders/orders.getOrders");

router.get("/", function (req, res) {
  const userId = req.params.id;
  console.log(userId);
  GetOrders(userId, res);
});

module.exports = router;
