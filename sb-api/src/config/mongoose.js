const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/SB", () => {
  console.log("Database connected", (e) => console.log(e.message));
});
