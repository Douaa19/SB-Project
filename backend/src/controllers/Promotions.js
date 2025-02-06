const { Promotion, Item } = require("../models");

//  Get promotions
const getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate({
      path: "item_id",
      select:
        "title description colors images size price promotionPrice bestSelling category_id",
      populate: {
        path: "category_id",
        select: "name",
      },
    });
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
    const { item_id, percentage, duration, start_date, end_date } = req.body;
    const item = await Item.findById(item_id);
    if (!item) {
      res.status(400).send({ messageError: "Item not found!" });
    }
    const newPrice = item.price - (item.price * percentage) / 100;
    const promotionPrice = (Math.ceil(newPrice) - 0.01 + 1).toFixed(2);
    const promotionExists = await Promotion.find({ item_id });

    if (promotionExists.length > 0) {
      res.status(200).send({ messageError: "Promotion is already exists!" });
    } else {
      const newPromo = await Promotion.create({
        item_id,
        percentage,
        duration,
        price: promotionPrice,
        startDate: convertToISODate(start_date),
        endDate: convertToISODate(end_date),
      });

      if (newPromo) {
        await Item.findByIdAndUpdate(item_id, { promotionPrice: newPromo._id });
        res
          .status(200)
          .send({ messageSuccess: "Promotion created successfully", newPromo });
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in bak end",
      error: error.message,
    });
  }
};

const convertToISODate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(`${year}-${month}-${day}T00:00:00Z`);
};

// Delete Promotion
const deletePromotion = async (req, res) => {
  try {
    const { promotion_id } = req.params;
    const promotion = await Promotion.findByIdAndDelete(promotion_id);
    if (promotion) {
      const updateItem = await Item.findByIdAndUpdate(promotion.item_id, {
        promotionPrice: null,
      });
      if (updateItem) {
        res
          .status(200)
          .send({ messageSuccess: "Promotion deleted successfully!" });
      }
    } else {
      res.status(404).send({ messageError: "Promotion doesn't found!" });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in bak end",
      error: error.message,
    });
  }
};

// Update Promotion
const updatePromotion = async (req, res) => {
  try {
    const { promotion_id } = req.params;
    const { percentage, duration, start_date, end_date } = req.body;

    const item = await Item.findOne({ promotionPrice: promotion_id });
    if (!item) {
      res.status(404).send({ messageError: "Item not found!" });
    }

    const promotion = await Promotion.findById(item.promotionPrice);
    if (!promotion) {
      res.status(404).send({ messageError: "Promotion not found!" });
    }

    if (promotion) {
      const newPrice = item.price - (item.price * percentage) / 100;
      promotion.price = newPrice;
    }

    promotion.percentage = percentage ?? promotion.percentage;
    promotion.duration = duration ?? promotion.duration;
    promotion.startDate = start_date
      ? convertToISODate(start_date)
      : promotion.startDate;
    promotion.endDate = end_date
      ? convertToISODate(end_date)
      : promotion.endDate;

    await promotion.save();

    res.status(200).send({
      messageSuccess: "Promotion updated successfully!",
      updatedPromotion: promotion,
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in bak end",
      error: error.message,
    });
  }
};

module.exports = {
  getPromotions,
  createPromotion,
  deletePromotion,
  updatePromotion,
};
