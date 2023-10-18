const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

module.exports = function () {
  const db = mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");
  return db;
};
