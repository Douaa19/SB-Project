const { Order, OrderProducts, Item } = require("../models");
const nodmailer = require("nodemailer");

const createOrder = async (req, res) => {
  const shippingInfos = req.body.shippig;
  const items = req.body.items;

  try {
    await Order.create({
      address: shippingInfos.address
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get my orders
const getMyOrders = async (req, res) => {
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

module.exports = {
  createOrder,
  getMyOrders,
};
