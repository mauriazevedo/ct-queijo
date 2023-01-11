var express = require("express");
var router = express.Router({ mergeParams: true });
const GetOrders = require("../db/orders/orders.getOrdersbyStatus");

router.get("/", function (req, res) {
  const status = req.params.status;
  GetOrders(status, res);
});

module.exports = router;
