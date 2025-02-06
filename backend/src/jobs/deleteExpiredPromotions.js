const cron = require("node-cron");
const { Promotion, Item } = require("../models");

cron.schedule("5 0 * * *", async () => {
  try {
    console.log("Checking for expired promotions...");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiredPromotions = await Promotion.find({
      endDate: { $lte: today },
    });

    if (expiredPromotions.length > 0) {
      const expiredPromotionIds = expiredPromotions.map((promo) => promo._id);

      await Item.updateMany(
        {
          promotionPrice: {
            $in: expiredPromotionIds,
          },
        },
        {
          $set: {
            promotionPrice: null,
          },
        }
      );

      const result = await Promotion.deleteMany({
        _id: { $in: expiredPromotionIds },
      });

      console.log(`${result.deletedCount} expired promotions deleted.`);
      console.log(
        `Updated ${expiredPromotionIds.length} items to remove expired promotions.`
      );
    } else {
      console.log("No expired promotions found.");
    }

    console.log(`${result.deletedCount} expired promotions deleted.`);
  } catch (error) {
    console.error("Error deleting expired promotions:", error);
  }
});

console.log("Cron job for deleting expired promotions started.");
