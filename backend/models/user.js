const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{type:String,required:true,trim:true},
    emailid:{type:String,required:true,trim:true},
    mobile:{type:Number,required:true,trim:true}
});
const User=mongoose.model('User',userSchema);
module.exports=User;