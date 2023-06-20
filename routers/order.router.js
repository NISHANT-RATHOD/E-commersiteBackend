import express from 'express'
import { AllOrder, CreateOrder, DeleteOrder, MonthlyIncome, UpdateOrder } from '../controller/Order.controller';
import { VerifyToken, VerifyTokenAndAdmin, VerifyTokenAndAuthorization } from '../controller/VerifyToken.controller';
const router = express.Router();


router.post('/create',VerifyToken,CreateOrder);
router.put('/update/:id',VerifyTokenAndAuthorization,UpdateOrder);
router.delete('/delete/:id',VerifyTokenAndAdmin,DeleteOrder);
router.get('/find_user_order/:id',VerifyTokenAndAuthorization,CreateOrder);
router.get('/all_orders',VerifyTokenAndAdmin,AllOrder);
router.get('/income',VerifyTokenAndAdmin,MonthlyIncome);



export default router; 