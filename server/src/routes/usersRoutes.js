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
router.route("/contct").post(Users.handleRegister);

module.exports = router;
