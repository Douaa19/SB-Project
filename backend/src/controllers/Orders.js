const { Order, OrderProducts } = require("../models");
const Host = process.env.Host;
const Port = process.env.Port;
const EmailAuth = process.env.EmailAuth;
const PasswordAuth = process.env.PasswordAuth;
const nodemailer = require("nodemailer");
const newOrderEmail = require("../emails/NewOrderEmail");
const {
  orderModifiedAdminEmail,
} = require("../emails/OrderModifiedAdminEmail");
const {
  orderModifiedClientEmail,
} = require("../emails/OrderModifiedClientEmail");
// const orderSentEmail = require("../emails/OrderSentEmail");

const createOrder = async (req, res) => {
  const client_id = req.user.id;
  const shippingInfos = req.body.shipping;
  const items = req.body.items;

  try {
    await Order.create({
      client_id,
      address: shippingInfos.address,
      phone: shippingInfos.phone,
      email: shippingInfos.email,
      city: shippingInfos.city,
      zipCode: shippingInfos.postalCode,
      total: 0,
    }).then((response) => {
      if (!response) {
        console.log("Order doesn't created!");
      } else {
        // Create arrays
        let products_id = [];
        let quantities = [];
        let prices = [];
        let totals = [];
        items.forEach((item) => {
          products_id.push(item.item._id);
          quantities.push(item.quantity);
          prices.push(item.item.price);
          totals.push(item.quantity * item.item.price);
        });

        // create OredrProducts
        OrderProducts.create(
          {
            order_id: response._id,
            products_id,
            quantities,
            prices,
            totals,
          },
          (err, result) => {
            if (result) {
              // calculate total without shipping fees
              let Total = 0;
              totals.forEach((t) => {
                Total += t;
              });
              // add shipping fees
              Total += 40;

              // Update total in order
              Order.findByIdAndUpdate(
                response._id,
                { total: Total },
                (err, order) => {
                  if (order) {
                    const data = {
                      username: shippingInfos.name,
                      items,
                      shipping: 40,
                      total: Total,
                      status: response.status,
                    };

                    // Send email to admin
                    const transporter = nodemailer.createTransport({
                      host: `smtp.hostinger.com`,
                      port: 465,
                      secure: true,
                      auth: {
                        user: `${EmailAuth}`,
                        pass: `${PasswordAuth}`,
                      },
                    });

                    const mailOption = {
                      from: '"Saba Embroidery" <contact@sabaembroidery.com>',
                      to: `contact@sabaembroidery.com, ${shippingInfos.email}`,
                      subject: "Your Order Confirmation from SabaEmbroidery",
                      html: newOrderEmail.newOrder(data),
                    };

                    transporter.sendMail(mailOption, (error, info) => {
                      if (error) {
                        res.send(error);
                      } else {
                        console.log("Order sent!");
                        res.status(200).send({
                          messageSuccess: "Your order passed successfully",
                        });
                      }
                    });
                    // Send email to the client with the order information
                  }
                }
              );
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get my orders
const getOrdersByClient = async (req, res) => {
  try {
    const user_id = req.user.id;
    let myOrders = await Order.find({ clinet_id: user_id })
      .populate({
        path: "client_id",
        select: "username email address phoneNum",
      })
      .populate({
        path: "item_id",
        select: "title description color images size price category_id",
      })
      .exec();
    res.status(200).send(myOrders);
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get user orders
const getUserOrders = async (req, res) => {
  try {
    const user = req.user;

    await Order.find({ client_id: user.id }).then((orders) => {
      if (orders) {
        res.status(200).send(orders);
      } else {
        res.status(404).send({ messageError: "Orders not found!" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get user orders by status
const getUserOrdersByStatus = async (req, res) => {
  try {
    const user = req.user;
    const status = req.params.status;

    await Order.find({ client_id: user.id, status: status }).then((orders) => {
      if (orders.length > 0) {
        res.status(200).send(orders);
      } else if (orders.length === 0) {
        res
          .status(200)
          .send({ message: `Orders with status ${status} not found` });
      } else {
        res.status(404).send({ messageError: "Orders not found!" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get userOrders by date range
const getUserOrdersByDate = async (req, res) => {
  try {
    const user = req.user;
    const { startDate, endDate } = req.body;

    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split("/").map(Number);
      return new Date(Date.UTC(year, month - 1, day));
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);
    end.setUTCDate(end.getUTCDate() + 1);

    await Order.find({
      client_id: user.id,
      createdAt: { $gte: start, $lt: end },
    }).then((orders) => {
      if (orders.length > 0) {
        res.status(200).send(orders);
      } else if (orders.length === 0) {
        res.status(200).send({
          messae: `Orders with date range ${startDate} and ${endDate} not found`,
        });
      } else {
        res.status(400).send({ messageError: "Orders not found!" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get user order by id
const getUserOrder = async (req, res) => {
  try {
    const user = req.user;
    const { order_id } = req.params;

    await Order.find({ client_id: user.id, _id: order_id }).then((order) => {
      if (order) {
        res.status(200).send(order);
      } else {
        res.status(400).send({ messageError: "Order not found!" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// edit order
const editOrder = async (req, res) => {
  try {
    const user = req.user;
    const { order_id } = req.params;
    const newData = req.body;

    await Order.findById(order_id).then(async (order) => {
      if (order && order.client_id == user.id) {
        if (order.status == "pending") {
          await Order.findByIdAndUpdate(order_id, newData)
            .populate("client_id", "username email")
            .then(async (order) => {
              if (order) {
                const data = {
                  username: order.client_id.username,
                  address: newData.address ? newData.address : order.address,
                  phone: newData.phone ? newData.phone : order.phone,
                  email: newData.email ? newData.email : order.email,
                  city: newData.city ? newData.city : order.city,
                  zipCode: newData.zipCode ? newData.zipCode : order.zipCode,
                };

                const transporter = nodemailer.createTransport({
                  host: `${Host}`,
                  port: `${Port}`,
                  secure: true,
                  auth: {
                    user: `${EmailAuth}`,
                    pass: `${PasswordAuth}`,
                  },
                });

                const clientMailOption = {
                  from: '"Saba Embroidery" <contact@sabaembroidery.com>',
                  to: order.client_id.email,
                  subject: "Shipping Info Updated",
                  html: orderModifiedClientEmail(data),
                };

                const adminMailOprion = {
                  from: '"Saba Embroidery" <contact@sabaembroidery.com>',
                  to: "contact@sabaembroidery.com",
                  subject: "Customer Shipping Info Updated",
                  html: orderModifiedAdminEmail(data),
                };

                Promise.all([
                  transporter.sendMail(clientMailOption),
                  transporter.sendMail(adminMailOprion),
                ])
                  .then(([clientInformation, adminInfo]) => {
                    console.log("Emails sent successfully!");
                    res.status(200).send({
                      order,
                      messageSuccess: "Order updated successfully!",
                    });
                  })
                  .catch((error) => {
                    console.error("Error sending emails:", error);
                    res.status(500).send(error);
                  });
              } else {
                res.status(400).send({ messageError: "Order not updated!" });
              }
            });
        } else {
          res.status(200).send({
            messageError: `You can't edit this order because its status is ${order.status}`,
          });
        }
      } else {
        res.status(400).send({ messageError: "Order not found" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrdersByClient,
  getUserOrders,
  getUserOrdersByStatus,
  getUserOrdersByDate,
  getUserOrder,
  editOrder,
};
