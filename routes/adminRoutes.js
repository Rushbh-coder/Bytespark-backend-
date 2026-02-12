
const router = require("express").Router();
const Product = require("../models/Product");

router.post("/add-product", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

module.exports = router;
