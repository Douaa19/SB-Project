const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controllers
const { Order } = require("../controllers");

// create order
router.route("/create-order").post(authorization, Order.createOrder);

// get order
router.route("/get-order/:order_id").get();

// get orders
router.route("/get-orders").get();

// get orders by client
router.route("/my-orders").get(authorization, Order.getOrdersByClient);

// delete orders
router.route("/delete-order/:order_id").post();

// get user orders
router.route("/user-orders").get(authorization, Order.getUserOrders);

// get orders by status
router
  .route("/user-orders/:status")
  .get(authorization, Order.getUserOrdersByStatus);

// get user orders by date range
router
  .route("/user-orders-by-date")
  .get(authorization, Order.getUserOrdersByDate);

// get user order by id
router.route("/user-order/:order_id").get(authorization, Order.getUserOrder);

// edit order by user
router.route("/user-edit-order/:order_id").put(authorization, Order.editOrder);

module.exports = router;
