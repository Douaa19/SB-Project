const express = require("express");
const router = express.Router();

// create order
router.route("/create-order").post();

// get order
router.route("/get-order/:order_id").get();

// get orders
router.route("/get-orders").get();

// update orders
router.route("/update-order/:order_id").post();

// delete orders
router.route("/delete-order/:order_id").post();

module.exports = router;
