const express = require("express");
const router = express.Router();

router.route("/create-item").post();

// get item
router.route("/get-item/:item_id").post();

// get items
router.route("/get-items").post();

// update item
router.route("/update-item/:item_id").post();

// delete item
router.route("/delete-item/:item_id").post();

module.exports == router;
