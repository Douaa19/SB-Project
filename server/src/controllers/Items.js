const { Item, Category } = require("../models");

// get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("category_id", "name");
    if (items.length > 0) {
      res.status(200).send(items);
    } else {
      res.status(404).send({ messageError: "No items here" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ messageError: "Somthing goes wrong in server side!" });
  }
};

// get one item
const getItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const item = await Item.findById(item_id).populate("category_id", "name");
    if (!item) {
      res.status(404).send({ messageError: "Item doesn't found" });
    } else {
      res.status(200).send(item);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// get items by category
const getItemsByCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const items = await Item.find({ category_id: category_id }).populate(
      "category_id",
      "name"
    );
    if (!items) {
      res
        .status(400)
        .send({ messageError: "This category doesn't countain any items" });
    } else {
      res.status(200).send(items);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// create item
const createItem = async (req, res) => {
  try {
    const { title, description, size, price, category_id } = req.body;
    const images = [];
    req.files.map((file, index) => {
      images.push(file.filename);
    });
    // chack item if exists
    const itemExists = await Item.find({ title });
    if (itemExists.length > 0) {
      res.status(400).send({ messageError: "This item is elready exists" });
    } else {
      const newItem = await Item.create({
        title,
        description,
        size,
        price,
        category_id,
        images,
      });
      if (newItem) {
        res.status(200).send({ messageSuccess: "New atem created", newItem });
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// delete item
const deleteItem = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// update item
const updateItem = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

module.exports = {
  getItems,
  getItem,
  getItemsByCategory,
  createItem,
  deleteItem,
  updateItem,
};
