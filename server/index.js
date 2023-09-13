require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

// require mongoose
require("./src/config/mongoose");

// routes
const { auth, categories, items, orders } = require("./src/routes");

// meddlewares
app.use(morgan("tiny"));
app.use(
  cors({
    // origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Welcom to Saba Embrodery",
  });
});

// use routes
app.use("/api/auth", auth);
app.use("/api/categories", categories);
app.use("/api/items", items);
app.use("/api/orders", orders);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
