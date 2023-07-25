const User=require('../models/user');
exports.createUser=async(req,res)=>{
    try{
        const{name,emailid,mobile}=req.body
        let newUser=new User({
            name,
            emailid,
            mobile
        });
        newUser=await newUser.save();
        res.status(200).json(newUser);
    }
    catch(e){
         res.status(500).json({error:e.message})
      }
}
exports.users=async(req,res)=>{
    try{
        const users=await User.find({});
        //find data
        res.json(users);
    }
    catch(e){
        res.status(500).json({error:e.message});
     }
}
exports.singleUser=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user);
    }
   catch(e){
    res.status(500).json({error:e.message});
   }
}
exports.updateUser=async(req,res)=>{
    try{
        const {name,emailid,mobile}=req.body;
        let updateUser=new User({
            name,
            emailid,
            mobile,
            _id:req.params.id
        });
        updateUser= await User.findByIdAndUpdate(req.params.id,updateUser);
        res.json({message:`User with is ${req.params.id} updated successfully`});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}