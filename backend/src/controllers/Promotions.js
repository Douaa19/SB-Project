const { Promotion, Item } = require("../models");

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
    const item = await Item.findById(item_id);
    if (!item) {
      res.status(400).send({ messageError: "Item not found!" });
    }
    const promotionPrice = item.price - (item.price * percentage) / 100;
    const promotionExists = await Promotion.find({ item_id });

    if (promotionExists.length > 0) {
      res.status(200).send({ messageError: "Promotion is already exists!" });
    } else {
      const newPromo = await Promotion.create({
        item_id,
        percentage,
        duration,
        price: promotionPrice,
      });

      if (newPromo) {
        await Item.findByIdAndUpdate(item_id, { promotionPrice: newPromo._id });
        res
          .status(200)
          .send({ messageSuccess: "Promotion created successfully", newPromo });

        setTimeout(async () => {
          const deletePromo = await Promotion.findByIdAndDelete(newPromo._id);
          if (deletePromo) {
            const updateItem = await Item.findByIdAndUpdate(item_id, {
              promotionPrice: null,
            });
            if (updateItem) {
              res.status(200).send({
                messageSuccess: "Promo deleted & Item updated successfully!",
              });
            }
          }
        }, duration * 24 * 60 * 60);
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in bak end",
      error: error.message,
    });
  }
};

// Delete Promotion
const deletePromotion = async (req, res) => {
  try {
    const { promotion_id } = req.params;
    console.log(promotion_id);
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in bak end",
      error: error.message,
    });
  }
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
