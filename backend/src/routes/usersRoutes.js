const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controller
const { Users } = require("../controllers");

// contact admin
router.route("/contact").post(Users.sendMessage);

// get profile
router.route("/profile").get(authorization, Users.getProfile);

module.exports = router;
