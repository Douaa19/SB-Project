const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});
