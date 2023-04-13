require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

// require mongoose
require("./src/config/mongoose");

// meddlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcom to Saba Embrodery",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
