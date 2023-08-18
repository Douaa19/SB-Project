const { User } = require("../models");

// hendle register
const handleRegister = async (req, res) => {
  try {
    const { email, username, password, phoneNum, address } = req.body;
    const userExists = await User.find({ email, phoneNum });
    if (userExists.length == 0) {
      const newUser = await User.create({
        email,
        password,
        username,
        phoneNum,
        address,
      });
      if (!newUser) {
        res.satus(404).send({ messageError: "New user not created" });
      } else {
        res.status(200).send({ messageSuccess: "User created successfully" });
      }
    } else {
      res
        .status(400)
        .send({ userExists, messageError: "User already exists!" });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// hendle login
const hendleLogin = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

module.exports = {
  handleRegister,
  hendleLogin,
};
