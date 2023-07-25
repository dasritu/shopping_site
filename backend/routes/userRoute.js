const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
router.post('/users',userController.createUser);
router.get('/users',userController.users);
router.get('/users/:id',userController.singleUser);
router.post('/users/:id',userController.updateUser);
module.exports=router;