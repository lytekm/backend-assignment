const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
