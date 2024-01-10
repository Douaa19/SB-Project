const { User } = require("../models");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const uuid = require("node-uuid");

// hendle register
const handleRegister = async (req, res) => {
  try {
    const { email, username, password, phoneNum, address, role } = req.body;
    const userExists = await User.find({ email, phoneNum });

    if (userExists.length == 0) {
      const newUser = await User.create({
        email,
        password,
        role,
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
    let data = "";
    let { email = req.body.email, password = req.body.password } = data;
    const isEmail = (email) => {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    };

    if (!isEmail(email)) {
      username = req.body.email;
    }

    const user = await User.findOne(username ? { username } : { email });
    if (!user) {
      res.status(400).send({ messageError: "Credentials are invalid" });
    } else {
      await user.comparePasswords(password).then(async (result) => {
        if (result) {
          const id = user._id;
          const username = user.username;
          const email = user.email;
          const role = user.role;
          const token = jwt.sign(
            {
              id,
              username,
              email,
              role,
            },
            process.env.JWT_ACCESS_SECRET
          );
          if (token) {
            const dateStr = new Date();
            const lastAccess = moment.utc(dateStr).format("DD.MM.YYY HH:mm");
            await User.findByIdAndUpdate(user._id, { lastAccess });
            return res.status(200).send({ token });
          } else {
            return res.json({ message: "Token not created" });
          }
        } else {
          res.status(404).json({ message: "Password is incorrect" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// forget password
const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send({ messageError: "This email is wrong" });
    } else {
      const token = uuid.v4();

      user.resetToken = token;
      user.resetTokenExpiration = "pending";
      await user.save();
      res.status(200).send(token);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// contact admin
const sendMessage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  handleRegister,
  hendleLogin,
  forgetPassword,
  sendMessage,
};
