import express from "express";
import Product from "../models/Product.js";

const productRoutes = express.Router();

const getProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

productRoutes.route("/").get(getProduct);

export default productRoutes;
