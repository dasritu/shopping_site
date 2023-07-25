//Product related controllers
//to fulfill the request of the user all the logics
//to interact with models we have to import Model
const Product=require('../models/product');

exports.createProduct=async (req,res)=>{//async because of await method
    //create the Product
    try{
      const {title,description,price,imgUrl} =req.body;
     //object distructuring in shortcut
     let newProduct=new Product({
        title,
        description,
        price,
        imgUrl
        //the names should be same as the Schema 
        //if the property and value is same then we can only write the value automatically it wiil
        //set the property name 
    });
    newProduct=await newProduct.save();//await keywords pause the execution until this line execute 
    //save method save this in database from mongoose
    res.status(200).json(newProduct);//status code
   }
   catch(e){
    res.status(500).json({error:e.message})
      }
};
exports.products = async(req,res)=>{
  try{
    //variable where fetched data are stored
    const products = await Product.find({});//fetching data
    //to show products
    res.json(products);//return to the user

  }
  catch(e){
    res.status(500).json({error:e.message});
  }

}
exports.singleProduct = async(req,res)=>{
  try{
    //to find a single products by Id we have to use params
    const product=await Product.findById(req.params.id);
    // if(!product){
    //   res.json({
    //     message:"Product does not found"
    //   })
    // }
    res.json(product);
  }
  catch(e){
    res.status(500).json({error:e.message});
  }
};
exports.updateProduct=async (req,res)=>{//async because of await method
  //create the Product
  try{
    const {title,description,price,imgUrl} =req.body;
   //object distructuring in shortcut
   let updateProduct=new Product({
      title,
      description,
      price,
      imgUrl,
      _id:req.params.id
      //id is must for updata
      //the names should be same as the Schema 
      //if the property and value is same then we can only write the value automatically it wiil
      //set the property name 
  })
  updateProduct=await Product.findByIdAndUpdate(req.params.id,updateProduct);//await keywords pause the execution until this line execute 
  //save method save this in database from mongoose
  res.json({message:`product with id ${req.params.id} updated successfully`});//status code
 }
 catch(e){
  res.status(500).json({error:e.message})
    }
}

exports.deleteProduct =async (req,res)=>{
  try{
    const deleteP=await Product.findByIdAndRemove(req.params.id);
    res.json({
      message:`Products with id ${req.params.id} delted successfully`
    });
  }
  catch(e){
    res.status(500).json({error:e.message})
      }
}



