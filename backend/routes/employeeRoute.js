const express=require('express');
const router =express.Router();//Make A Router

const employeeController=require('../controllers/employeeController');

router.post('/employees', employeeController.createEmployee);

//as it make changes while put data
module.exports = router;