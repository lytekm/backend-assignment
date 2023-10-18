const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// Get all products
router.get("/api/products", controllers.getProducts);

// Get product by ID
router.get("/api/products/:id", controllers.getProductById);

// Add a new product
router.post("/api/products", controllers.createProduct);

// Update product by ID
router.put("/api/products/:id", controllers.updateProductById);

// Remove product by ID
router.delete("/api/products/:id", controllers.removeProductById);

// Remove all products
router.delete("/api/products", controllers.removeAllProducts);

// Find products whose name contains 'kw'
router.get("/api/products?name=kw", controllers.getProductsByName);

module.exports = router;
