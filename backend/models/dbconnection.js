const mongoose = require("mongoose");

const dbconnection = mongoose
  .connect("mongodb://localhost:27017/Bussiness_deals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

module.exports = dbconnection;
