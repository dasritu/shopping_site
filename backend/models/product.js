//a product structure 
//we require mongoose package
const mongoose=require('mongoose');

//schema means a structure the inner architechture
const productSchema =mongoose.Schema({
    title:{type: String,required:true,trim:true},
    description:{type: String,required:true,trim:true},
    price:{type: Number,required:true},
    imgUrl:{type:String,required:true}

});
//Product->Collection
const Product = mongoose.model('Product',productSchema);

module.exports=Product;
