const { User } = require("../models");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const uuid = require("node-uuid");
const nodemailer = require("nodemailer");

// hendle register
const handleRegister = async (req, res) => {
  try {
    const { email, username, password, phoneNum, address, role } = req.body;
    const userExists = await User.find({ email });
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

    const user = await User.findOne(email ? { email } : { username });
    if (!user) {
      res.send({ messageError: "Credentials are invalid" });
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
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      res.send({ messageError: "This email is wrong" });
    } else {
      const token = uuid.v4();

      user.resetToken = token;
      user.resetTokenExpiration = "pending";
      await user.save();

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "sabalarif97@gmail.com",
          pass: "bjnzseuzjmzvomlv",
        },
      });

      const mailOption = {
        from: "sabalarif97@gmail.com",
        to: email,
        subject: "Contact message",
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
              rel="stylesheet" />
            <title>Saba Embroidery - Contact Message</title>
            <style>
            @font-face {
              font-family: Montserrat;
              src: url('../fonts/Montserrat-Regular.ttf') format('woff2'),
                    url('../fonts/Montserrat-Bold.ttf') format('woff')
              font-weight: normal;
              font-style: normal;
            }
              body {
                margin: 0;
                font-family: Montserrat, sans-serif;
              }
              table {
                border-spacing: 0;
              }
              td {
                padding: 0;
              }
              img {
                border: 0;
              }
              .wrapper {
                width: 100%;
                table-layout: fixed;
                padding-bottom: 60px;
              }
              .main {
                background-color: #ffffff;
                margin: 0 auto;
                width: 100%;
                max-width: 600px;
                border-spacing: 0;
                font-family: Montserrat;
                color: black;
              }
              
            </style>
          </head>
          <body>
            <center class="wrapper">
              <table
                class="main"
                width="100%"
                style="border: 1px solid #dab88a; border-radius: 8px">
                <!-- LOGO SECTION -->
                <tr>
                  <td>
                    <table width="100%">
                      <tr>
                        <td style="text-align: center; padding: 1rem 0 0; width: 100%; max-width: 300px;">
                          <a href="sabaembroidery.ma">
                            <img
                              src="https://drive.google.com/uc?export=download&id=1NNBtsCyJXXH2cPm68vt8edNNZguDYHH5"
                              alt="Saba Embroidery LOGO"
                              width="14%" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
        
                <!-- TEXT -->
                <tr>
                  <td>
                    <table style="width: 100%">
                      <tr>
                        <td
                          style="
                            font-size: 16px;
                            font-weight: bold;
                            width: 100%;
                            padding: 0 2rem 1rem;
                            text-align: center;
                          ">
                          <span>Reset your password</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- TEXT -->
        
                <!-- BODY SECTION -->
                <tr>
                  <td>
                    <table width="100%">
                      <tr>
                        <td class="tree-rows">
                          <table
                            class="row"
                            style="font-size: 18px; padding: 0 2rem; width: 100%">
                            <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                              <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                                <span>Please click the link to reset your password.</span>
                              </td>
                            </tr>
                            
                            <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                              <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                                <a href="http://localhost:3000/reset-password/${user.resetToken}">localhost:3000/reset-password/${user.resetToken}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </center>
          </body>
        </html>
        `,
      };

      transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          res.send(error);
        } else {
          console.log("Email sent!");
          res.status(200).send(token);
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

// contact admin
const sendMessage = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
      email: req.body.data.email,
      phone: req.body.data.phone,
      message: req.body.data.message,
      to: "sabalarif97@gmail.com",
    };

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sabalarif97@gmail.com",
        pass: "bjnzseuzjmzvomlv",
      },
    });
    const mailOption = {
      from: data.email,
      to: data.to,
      subject: "Contact message",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet" />
          <title>Saba Embroidery - Contact Message</title>
          <style>
          @font-face {
            font-family: Montserrat;
            src: url('../fonts/Montserrat-Regular.ttf') format('woff2'),
                  url('../fonts/Montserrat-Bold.ttf') format('woff')
            font-weight: normal;
            font-style: normal;
          }
            body {
              margin: 0;
              font-family: Montserrat, sans-serif;
            }
            table {
              border-spacing: 0;
            }
            td {
              padding: 0;
            }
            img {
              border: 0;
            }
            .wrapper {
              width: 100%;
              table-layout: fixed;
              padding-bottom: 60px;
            }
            .main {
              background-color: #ffffff;
              margin: 0 auto;
              width: 100%;
              max-width: 600px;
              border-spacing: 0;
              font-family: Montserrat;
              color: black;
            }
            
          </style>
        </head>
        <body>
          <center class="wrapper">
            <table
              class="main"
              width="100%"
              style="border: 1px solid #dab88a; border-radius: 8px">
              <!-- LOGO SECTION -->
              <tr>
                <td>
                  <table width="100%">
                    <tr>
                      <td style="text-align: center; padding: 1rem 0 0; width: 100%; max-width: 300px;">
                        <a href="sabaembroidery.ma">
                          <img
                            src="https://drive.google.com/uc?export=download&id=1NNBtsCyJXXH2cPm68vt8edNNZguDYHH5"
                            alt="Saba Embroidery LOGO"
                            width="14%" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
      
              <!-- TEXT -->
              <tr>
                <td>
                  <table style="width: 100%">
                    <tr>
                      <td
                        style="
                          font-size: 16px;
                          font-weight: bold;
                          width: 100%;
                          padding: 0 2rem 1rem;
                          text-align: center;
                        ">
                        <span>You have received a new message</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- TEXT -->
      
              <!-- BODY SECTION -->
              <tr>
                <td>
                  <table width="100%">
                    <tr>
                      <td class="tree-rows">
                        <table
                          class="row"
                          style="font-size: 18px; padding: 0 2rem; width: 100%">
                          <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                            <td style="width: 6rem; color: #dab88a; font-weight: bold; font-size: 16px;">
                              <span>Name</span>
                            </td>
                            <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                              <span>${data.name}</span>
                            </td>
                          </tr>
                          <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                            <td style="width: 6rem; color: #dab88a; font-weight: bold; font-size: 16px;">
                              <span>Email</span>
                            </td>
                            <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                              <span>${data.email}</span>
                            </td>
                          </tr>
                          <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                            <td style="width: 6rem; color: #dab88a; font-weight: bold; font-size: 16px;">
                              <span>Phone</span>
                            </td>
                            <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                              <span>${data.phone}</span>
                            </td>
                          </tr>
                          <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                            <td style="width: 6rem; color: #dab88a; font-weight: bold; font-size: 16px;">
                              <span>Message</span>
                            </td>
                            <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                              <span>${data.message}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </body>
      </html>
      `,
    };

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        res.send(error);
      } else {
        res.status(200).send("Message sent!");
      }
    });
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
