var express = require("express");
var router = express.Router();
const UpdateStatus = require("../db/orders/orders.updateStatus");

router.patch("/", function (req, res) {
  console.log(req.body);

  const orderId = req.body.order_id;
  const message = req.body.message;
  const newStatus = req.body.new_status;

  UpdateStatus(orderId, newStatus, message, res);
});

module.exports = router;
