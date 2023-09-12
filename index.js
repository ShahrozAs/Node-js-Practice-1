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

const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  if (req.url.startsWith("/product")) {
    // console.log(req.url.split("/"));
    const id = req.url.split("/")[2];

    const product = products.find((p) => p.id === (+id));
    console.log(product);

    res.setHeader("Content-Type", "text/html");
    const modifyIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifyIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/data":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(8000);
