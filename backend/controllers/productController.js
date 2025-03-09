const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 20; // Default to 20 products per page

  try {
    const products = await Product.find()
      .skip((page - 1) * limit) // Skip products from previous pages
      .limit(limit); // Limit the number of products per page

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching reviews", error: error.message });
  }
};
