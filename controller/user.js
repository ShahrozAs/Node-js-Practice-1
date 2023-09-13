const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.readAllProduct = (req, res) => {
  console.log(req.params);
  res.json(users);
};
exports.readProductById = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = users.find((p) => p.id === id);
  res.json(product);
};
exports.addNewProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  // res.json({type:"POST"});
  res.json(req.json);
};
exports.UpdateProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ type: "PATCH" });
};
exports.deleteProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1);
  res.status(201).json(product);
};

exports.overwriteProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  users.splice(productIndex, 1, { ...req.body, id: id });
  // res.json({ type: "PUT" });
  res.status(201).json();
};
