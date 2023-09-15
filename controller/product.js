const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
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

exports.readAllProduct = (req, res) => {
  console.log(req.params);
  res.json(products);
};
exports.readProductById = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
exports.UpdateProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ type: "PATCH" });
};
exports.deleteProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};

exports.overwriteProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  // res.json({ type: "PUT" });
  res.status(201).json();
};
