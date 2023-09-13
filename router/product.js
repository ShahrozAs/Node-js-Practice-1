const express=require('express')
const productsController=require('../controller/product')
var route = express.Router();

route.get("/",productsController.readAllProduct)
.get("/:id",productsController.readProductById)
.post("/", productsController.addNewProduct)
// Update put product/:id      Overwrite
.put("/:id",productsController.overwriteProductById)
//Update patch product/:id
.patch("/:id",productsController.UpdateProductById)
//Delete Product
.delete("/:id", productsController.deleteProductById)

exports.route=route