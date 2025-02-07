const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { Promotion } = require("../models");
const EmailAuth = process.env.EmailAuth;
exports.EmailAuth = EmailAuth;
const PasswordAuth = process.env.PasswordAuth;
exports.PasswordAuth = PasswordAuth;

const transporter = nodemailer.createTransport({
  host: `smtp.hostinger.com`,
  port: 465,
  secure: true,
  auth: {
    user: `${EmailAuth}`,
    pass: `${PasswordAuth}`,
  },
});

cron.schedule("0 0 * * *", async () => {
  try {
    console.log("Cheking for promotions ending tomorrow...");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const promotions = await Promotion.find({
      endDate: {
        $gte: new Date(tomorrow.setHours(0, 0, 0, 0)),
        $lt: new Date(tomorrow.setHours(23, 59, 59, 999)),
      },
    });

    if (promotions.length > 0) {
      const emailContent = promotions
        .map((promo) => `Promotion for Item ID: ${promo.item_id} ends tommorow`)
        .join("\n");

      await transporter.sendMail({
        from: '"Saba Embroidery" <contact@sabaembroidery.com>',
        to: "contact@sabaembroidery.com",
        subject: "Promotion Ending Soon",
        text: emailContent,
      });

      console.log("Email sent to admin.");
    } else {
      console.log("No promotions eding tomorrow");
    }
  } catch (error) {
    console.log("Error sending emails", error);
  }
});

console.log("Cron job started");
