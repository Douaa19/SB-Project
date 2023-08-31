const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controllers
const { Item, uploadImages } = require("../controllers");

// get items
router.route("/get-items").get(Item.getItems);

// get item
router.route("/get-item/:item_id").get(Item.getItem);

// get items by category
router.route("/get-items/:category_id").get(Item.getItemsByCategory);

// create item
router
  .route("/create-item")
  .post(
    authorization,
    authorizationRole("admin"),
    uploadImages.array("images", 4),
    Item.createItem
  );

// update item
router
  .route("/update-item/:item_id")
  .post(authorization, authorizationRole("admin"), Item.deleteItem);

// delete item
router
  .route("/delete-item/:item_id")
  .post(authorization, authorizationRole("admin"), Item.updateItem);

module.exports = router;
