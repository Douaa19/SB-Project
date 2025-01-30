const express = require("express");
const app = express();

const auth = require("./authRoutes");
const items = require("./itemsRoutes");
const orders = require("./ordersRoutes");
const categories = require("./categoriesRoutes");
const users = require("./usersRoutes");
const promotions = require("./promotionsRoutes");

app.get("/", (req, res) => {
  res.json({
    message: "Welcom to Saba Embroidery",
  });
});

app.use("/auth", auth);
app.use("/categories", categories);
app.use("/items", items);
app.use("/orders", orders);
app.use("/user", users);
app.use("/promotions", promotions);

module.exports = app;
