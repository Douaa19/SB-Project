const mongoose = require("mongoose");

const Categories = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", Categories);

module.exports = Category;
