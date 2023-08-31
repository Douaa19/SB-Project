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
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Item = mongoose.model("Item", Items);

module.exports = Item;
