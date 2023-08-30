const auth = require("./authRoutes");
const items = require("./itemsRoutes");
const orders = require("./ordersRoutes");
const categories = require("./categoriesRoutes");

module.exports = { auth, items, orders, categories };
