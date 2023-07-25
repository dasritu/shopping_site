const Employee=require('../models/employee');

exports.createEmployee=async (req,res)=>{//async because of await method
    //create the Product
    try{
      const {name,role} =req.body;
     //object distructuring in shortcut
     let newEmployee=new Employee({
        name,
        role
        //the names should be same as the Schema 
        //if the property and value is same then we can only write the value automatically it wiil
        //set the property name 
    });
    newEmployee=await newEmployee.save();//await keywords pause the execution until this line execute 
    //save method save this in database from mongoose
    res.status(200).json(newEmployee);//status code
   }
   catch(e){
    res.status(500).json({error:e.message})
      }
};
