const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controller
const { Users, Orders } = require("../controllers");

// contact admin
router.route("/contact").post(Users.sendMessage);

// get profile
router.route("/profile").get(authorization, Users.getProfile);

// get profile
router.route("/edit-profile").post(authorization, Users.editProfile);

// edit password
router.route("/edit-password").post(authorization, Users.editPassword);

module.exports = router;
