const mongoose=require('mongoose');


const employeeSchema=mongoose.Schema({
    name:{type: String,required:true,trim:true},
    role:{type: String,required:true,trim:true},
});
const Employee = mongoose.model('Employee',employeeSchema);

module.exports=Employee;