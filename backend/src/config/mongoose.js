require('dotenv').config();
const mongoose = require("mongoose");

const dbURI = process.env.DB_HOST;

mongoose.connect(dbURI, (e) => {
  if (e) {
    console.log("Can't connect to database: ", e.message);
  } else {
    console.log("Database mongo connected");
  }
});

module.exports = mongoose;
