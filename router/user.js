const express=require('express')
const userController=require('../controller/user')
var route = express.Router();

route.get("/",userController.readAllProduct)
.get("/:id",userController.readProductById)
.post("/", userController.addNewProduct)
// Update put product/:id      Overwrite
.put("/:id",userController.overwriteProductById)
//Update patch product/:id
.patch("/:id",userController.UpdateProductById)
//Delete Product
.delete("/:id", userController.deleteProductById)

exports.route=route