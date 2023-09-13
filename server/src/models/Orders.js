const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Order = mongoose.model("Order", Orders);

module.exports = Order;
