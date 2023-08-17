const { User } = require("../models");

// hendle register
const handleRegister = async (req, res) => {
  try {
    const { email, username, password, phoneNum, address } = req.body;
    const userExists = await User.find({ email });
    console.log(userExists);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  handleRegister,
};
