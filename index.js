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

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

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

//  use when we send data from form ===============================================

server.use(express.static("public"));
// ===============================================




const auth = (req, res, next) => {
  console.log(req.body.password);
  if (req.body.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// server.use(auth);

// API - ENDPOINT - Route
server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.get("/demo", (req, res) => {
  // res.send("<h1>hello world</h1>")
  // res.sendFile("/Users/f3558/OneDrive/Desktop/Node js/index.html")
  //   res.json(products);
  //   res.sendStatus(404)
  res.status(201).send("<h1>MR Sherry</h1>");
});

server.listen(8080, () => {
  console.log("Server Started");
});
