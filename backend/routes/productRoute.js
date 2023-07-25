const express=require('express');
const router =express.Router();//Make A Router

const productController=require('../controllers/productController');

router.post('/products',productController.createProduct);//to post data

//as it make changes while put data
router.get('/products',productController.products);//to fecth the data we should write get data
module.exports = router;

router.get('/products/:id',productController.singleProduct);//:id means we have set the id as the parameter

router.post('/products',productController.createProduct);//for update we can use post method
//or we can use put method
router.put('/products/:id',productController.updateProduct);

router.delete('/products/:id',productController.deleteProduct);

