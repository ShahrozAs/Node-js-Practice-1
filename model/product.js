
const mongoose = require('mongoose');                             //for mongoose
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {type:Number,min:7 ,required:true},
    title: {type:String,required:true},
    description: String,
    price:{type:Number,required:true,min:[0,'price must be greater then zero']},
    discountPercentage: Number,
    rating: Number,
    stock: {type:Number,max:[100,'stock must be less than 100']},
    brand:String,
    category: String,
    thumbnail:String,
    images: [String]
  
  
  });
  
  exports.Product = mongoose.model('Product', productSchema);