const mongoose = require("mongoose");

const Promotions = new mongoose.Schema(
  {
    item_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    percentage: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Promotion = mongoose.model("Promotion", Promotions);

module.exports = Promotion;
