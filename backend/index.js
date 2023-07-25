const express=require('express');
const mongoose =require("mongoose");
//const path=require('path');
require('dotenv').config();
const productRouter=require('./routes/productRoute');

const employeeRouter=require('./routes/employeeRoute');

const userRouter=require('./routes/userRoute');

const app = express();//store in app variable
//mongoose.connect("mongodb+srv://rituparnadas:dasritu@cluster0.vlwdlmh.mongodb.net/shopping_site?retryWrites=true&w=majority");//we have to hide the data
//using environment variable using dotenv package


const mongodb_URI=process.env.MONGODB_URI;
mongoose.connect(mongodb_URI);
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Mongo Db connection error =>"));

db.once('open',()=>{
    console.log("Connnected to database successfull");
})

// app.get('/',function(req,res){//http method(get) method '/' is a path called home
//     const filePath = path.join(__dirname,'index.html');
//     res.sendFile(filePath);
// })
app.use(express.json());
app.use(productRouter);//middlewire


app.use(employeeRouter);

app.use(userRouter);

app.listen(4000,"0.0.0.0",() =>{
console.log("Server Started at port 4000");
})