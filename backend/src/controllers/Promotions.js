const { Promotion } = require("../models");

//  Get promotions
const getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate("item_id");
    if (promotions.length > 0) {
      res.status(200).send(promotions);
    } else {
      res
        .status(200)
        .send({ message: "Promitions table are empty", promotions });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in back end",
      error: error.message,
    });
  }
};

// Create Promotion
const createPromotion = async (req, res) => {
  try {
    const { item_id, percentage, duration } = req.body;
    console.log(item_id, percentage, duration);
  } catch (error) {
    res
      .status(500)
      .send({ messageError: "Somthing goes wrong in bak end", error });
  }
};

// Delete Promotion
const deletePromotion = async (req, res) => {
  console.log("Delete Promotion");
};

// Update Promotion
const updatePromotion = async (req, res) => {
  console.log("Update Promotion");
};

module.exports = {
  getPromotions,
  createPromotion,
  deletePromotion,
  updatePromotion,
};
