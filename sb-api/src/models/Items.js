const mongoose = require("mongoose");

const Items = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
      default: null,
    },
  ],
  size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Item = mongoose.model("Items", Item);

module.exports = Item;
