const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 8000;


// require mongoose
require("./src/config/mongoose");

const allowedOrigins = [
  "https://sabaembroidery.onrender.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "https://www.sabaembroidery.com",
];

app.use(morgan("tiny"));
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(routes);

// Listen for HTTP requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
