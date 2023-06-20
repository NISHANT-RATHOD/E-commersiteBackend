import express from 'express';
import { AddProduct, AllProduct, DeleteProduct, FindProduct, UpdateProduct } from '../controller/Product.controller';
import { VerifyTokenAndAdmin } from '../controller/VerifyToken.controller';

const router = express.Router();


router.put('/update/:id',VerifyTokenAndAdmin,UpdateProduct);
router.post("/add",AddProduct);
router.delete('/delete/:id',VerifyTokenAndAdmin,DeleteProduct); 
router.get('/find/:id',FindProduct); 
router.get('/all_product',AllProduct);


export default router;