const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const mongoose = require('mongoose');
const model =require('../model/product')
const Product=model.Product;

exports.addNewProduct = async(req, res) => {
  // console.log(req.body);
  // products.push(req.body);
  // res.json({type:"POST"});
  const product=new Product(req.body);
  // product.title="MR Sherry";
  // product.price=999;
  // product.rating=4.5;
  await product.save()
  res.json(product)


};

exports.readAllProduct =async (req, res) => {
  // console.log(req.params);
  const products=await Product.find();
  res.json(products);
};
exports.readProductById = async(req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  const product=await Product.find({"id":id})
  // const product = products.find((p) => p.id === id);
  res.json(product);
};
exports.UpdateProductById =async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  const product=await Product.findOneAndUpdate({"id":id}, req.body,{new:true})
  
  res.status(201).json(product);
};
exports.deleteProductById = async(req, res) => {
  const id = req.params.id;
  const product=await Product.findOneAndDelete({"id":id})

  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);
  res.status(201).json(product);
};

exports.overwriteProductById = async(req, res) => {
  const id = req.params.id;
  const product=await Product.findOneAndReplace({"id":id}, req.body,{new:true})
  // const productIndex = products.findIndex((p) => p.id === id);
  // products.splice(productIndex, 1, { ...req.body, id: id });
  // res.json({ type: "PUT" });
  res.status(201).json(product);
};
