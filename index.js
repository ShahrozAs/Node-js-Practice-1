// const secondFile = require("./secondFile");

// import {sum,diff} from './secondFile.js'
// console.log(sum(15, 5),diff(6,3));

// const fs =require('fs')

// By Sync Method
// const txt=fs.readFileSync('text.txt','utf-8');
// console.log(txt)

// fs.readFile('text.txt','utf-8',(err,txt)=>{
//     console.log(txt)
// })

// =====================================================================================

// const express=require('express')

// const server=express();

// server.listen(8080);

// console.log("hello world 3")
// console.log("hello world 3")

// Create Server==========================================================================

// const data = {
//   age: 21,
// };

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log("Server Started");
//   res.setHeader("Dummy", "Dummy Value");
//   //   res.setHeader("Content-Type", "application/json");
//   //   res.end(JSON.stringify(data));
//   res.setHeader("Content-Type", "text/html");
//   res.end("hello");
// });

// server.listen(8000);

// Create Server with HTML==========================================================================

// const fs = require("fs");

// const index=fs.readFileSync('index.html','utf-8')
// // const data = fs.readFileSync("data.json", "utf-8");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log("Server Started");
//   res.setHeader("Dummy", "Dummy Value");
//   //   res.setHeader("Content-Type", "application/json");
//   //   res.end(JSON.stringify(data));
//     res.setHeader("Content-Type", "text/html");
// //   res.setHeader("Content-Type", "application/json");
//   res.end(index);
// });

// server.listen(8000);

// Create Server with  conditions HTML/Json==========================================================================

// const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url,req.method);

//   if (req.url.startsWith("/product")) {
//     // console.log(req.url.split("/"));
//     const id = req.url.split("/")[2];

//     const product = products.find((p) => p.id === (+id));
//     console.log(product);

//     res.setHeader("Content-Type", "text/html");
//     const modifyIndex = index
//       .replace("**title**", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);
//     res.end(modifyIndex);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/data":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }
// });

// server.listen(8000);

// START EXPRESS ========================================================================

// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

const productsController = require("./controller/product");
const express = require("express");
const server = express();

// SERVER.USE for middleware

// Application level middleware
// server.use((req, res, next) => {
//   console.log(req.ip, req.hostname, req.get("User-Agent"));
//   next();
// });

// ==========================================================
// Route level middleware
// ==========================================================

// const auth=((req, res, next) => {
//   console.log(req.query.password);
//   if (req.query.password==="123") {

//     next();
//   } else {
//     res.sendStatus(401)
//   }
// });

// BODYPARSE use when we send data from json in body===============================================
server.use(express.json());

//===============================================

//  use when we send data from form ===============================================
// server.use(express.urlencoded);
// ===============================================

// MORGAN======================================================================
// const morgan = require("morgan");
// server.use(morgan("default"));
// MORGAN======================================================================

//  use when we send data from form ===============================================
// server.use(express.static("public"));
// ===============================================

// THREE METHOD TO SEND DATA
// query parameter
// url parameter
// body parameter

// const auth = (req, res, next) => {
//   // console.log(req.body.password);
//   // if (req.body.password === "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }
//   next();
// };

// server.use(auth);

//Products      C R U D

// API - ENDPOINT - Route
// API rootCertificates , base url , example google.com/api/v2/
// Read get /products
// server.get("/products", (req, res) => {
//   console.log(req.params);
//   res.json(products);
// });

// // Read get /products/:id

// server.get("/products/:id", (req, res) => {
//   console.log(req.params);
//   const id = +req.params.id;
//   const product = products.find((p) => p.id === id);
//   res.json(product);
// });

// server.post("/products", (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   // res.json({type:"POST"});
//   res.json(req.json);
// });

// // Update put product/:id      Overwrite
// server.put("/products/:id", (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });

//   // res.json({ type: "PUT" });
//   res.status(201).json();
// });

// //Update patch product/:id
// server.patch("/products/:id", (req, res) => {
//   const id =+req.params.id;
//   const productIndex=products.findIndex(p=>p.id===id);
//   const product=products[productIndex]
//   products.splice(productIndex,1,{...product,...req.body})
//   res.status(201).json({ type: "PATCH" });
// });

// //Delete Product
// server.delete("/products/:id", (req, res) => {
//   const id =+req.params.id;
//   const productIndex=products.findIndex(p=>p.id===id);
//   const product=products[productIndex]
//   products.splice(productIndex,1)
//   res.status(201).json(product);
// });

// Model - view -controller  MVC

require("dotenv").config();
const productRouter = require("./router/product");
const userRouter = require("./router/user");
const mongoose = require('mongoose');                             //for mongoose
// const { Schema } = mongoose;
// const morgan = require("morgan");

//Middleware
server.use(express.static("public"));
server.use(express.json());
server.use("/products", productRouter.route);
server.use("/user", userRouter.route);
// server.use(morgan("default"));
// server.use(express.urlencoded);

//db connection
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Schema 

// const productSchema = new Schema({
//   id: Number,
//   title: String,
//   description: String,
//   price:Number,
//   discountPercentage: Number,
//   rating: Number,
//   stock: Number,
//   brand:String,
//   category: String,
//   thumbnail:String,
//   images: [String]


// });

// const Product = mongoose.model('Product', productSchema);




console.log("ENV", process.env.DB_PASSWORD);
// productRouter.route.get("/products",productsController.readAllProduct)
// .get("/products/:id",productsController.readProductById)
// .post("/products", productsController.addNewProduct)
// // Update put product/:id      Overwrite
// .put("/products/:id",productsController.overwriteProductById)
// //Update patch product/:id
// .patch("/products/:id",productsController.UpdateProductById)
// //Delete Product
// .delete("/products/:id", productsController.deleteProductById)

// server.get("/demo", (req, res) => {
//   // res.send("<h1>hello world</h1>")
//   // res.sendFile("/Users/f3558/OneDrive/Desktop/Node js/index.html")
//   //   res.json(products);
//   //   res.sendStatus(404)
//   res.status(201).send("<h1>MR Sherry</h1>");
// });

server.listen(process.env.PORT, () => {
  console.log("Server Started");
});
