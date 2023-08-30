const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// get gategories
router.route("/get-categories").get();

// get gategory
router.route("/get-category/:category_id").get();

// create gategory
router.route("/create-category").get();

// delete gategory
router.route("/delete-category/:category_id").get();

// update gategory
router.route("/update-category/:category_id").get();

module.exports = router;
