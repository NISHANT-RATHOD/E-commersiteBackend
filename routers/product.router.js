const express = require ("express");
const  {VerifyTokenAndAdmin}= require('../controller/VerifyToken.controller');
const  {AllProduct,AddProduct,UpdateProduct,DeleteProduct,FindProduct} = require('../controller/Product.controller');


const router = express.Router();


router.put('/update/:id',VerifyTokenAndAdmin,UpdateProduct);
router.post("/add",AddProduct);
router.delete('/delete/:id',VerifyTokenAndAdmin,DeleteProduct); 
router.get('/find/:id',FindProduct); 
router.get('/all_product',AllProduct);

module.exports = router; 