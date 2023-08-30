const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

router.route("/create-item").post();

// get item
router.route("/get-item/:item_id").get();

// get items by category
router.route("/get-items/:category_id").get();

// get items
router.route("/get-items").get();

// update item
router.route("/update-item/:item_id").post();

// delete item
router.route("/delete-item/:item_id").post();

module.exports == router;
