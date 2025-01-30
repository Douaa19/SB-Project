const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controllers
const { Promotion } = require("../controllers");

// get promotions
router.route("/promotions").get(Promotion.getPromotions);

// create promotion
router
  .route("/create-promotion")
  .post(authorization, authorizationRole("admin"), Promotion.createPromotion);

// delete promotion
router
  .route("/delete-promotion/:promotion_id")
  .delete(authorization, authorizationRole("admin"), Promotion.deletePromotion);

// update promotion
router
  .route("/update-promotion/:promotion_id")
  .put(authorization, authorizationRole("admin"), Promotion.updatePromotion);

module.exports = router;
