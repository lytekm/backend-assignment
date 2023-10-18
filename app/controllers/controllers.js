const Product = require("../models/product.model");

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createProduct(req, res) {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateProductById(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function removeProductById(req, res) {
  try {
    const removedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!removedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(removedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function removeAllProducts(req, res) {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductsByName(req, res) {
  try {
    const keyword = req.params.keyword;
    const products = await Product.find({
      name: { $regex: keyword, $options: "i" },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  removeProductById,
  removeAllProducts,
  getProductsByName,
};
