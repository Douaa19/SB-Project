require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

// require mongoose
require("./src/config/mongoose");

// routes
const { auth } = require("./src/routes");

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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
