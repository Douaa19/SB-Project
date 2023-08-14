const User = require("../models");

// hendle register
const handleRegister = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  handleRegister,
};
