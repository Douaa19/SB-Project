const { Order } = require("../models");

const createOrder = async (req, res) => {
  console.log(req.body, req.user);
  // try {
  // const client_id = req.user.id;
  // const { item_id } = req.body;
  // let newOrder = await Order.create({ client_id, item_id });
  // newOrder = await newOrder.populate(
  //   "client_id",
  //   "username email address phoneNum"
  // );
  // newOrder = await newOrder.populate(
  //   "item_id",
  //   "title description color images size price category_id"
  // );
  // send email to the admin includes newOrder variable
  // send result
  //   res.status(200).send(newOrder);
  // } catch (error) {
  //   res.status(500).send({
  //     messageError: "Somthing goes wrong in server side",
  //     error: error.message,
  //   });
  // }
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
