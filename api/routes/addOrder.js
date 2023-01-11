var express = require("express");
var router = express.Router();
const AddOrder = require("../db/orders/orders.addOrder");

router.post("/", function (req, res) {
  console.log(req.body);

  const userId = req.body.user_id;
  const cheeseAmout = req.body.cheese_amount;
  const dulceDeLecheAmount = req.body.dulce_de_leche_amount;
  const yogurtAmount = req.body.yogurt_amount;
  const deadline = req.body.deadline;

  AddOrder(
    userId,
    cheeseAmout,
    dulceDeLecheAmount,
    yogurtAmount,
    deadline,
    res
  );
});

module.exports = router;
