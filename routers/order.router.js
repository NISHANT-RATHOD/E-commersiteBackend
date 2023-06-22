const express = require ('express');
const { AllOrder, CreateOrder, DeleteOrder, MonthlyIncome, UpdateOrder } = require ('../controller/Order.controller');
const { VerifyToken, VerifyTokenAndAdmin, VerifyTokenAndAuthorization } = require ('../controller/VerifyToken.controller');
const router = express.Router();


router.post('/create',VerifyToken,CreateOrder);
router.put('/update/:id',VerifyTokenAndAuthorization,UpdateOrder);
router.delete('/delete/:id',VerifyTokenAndAdmin,DeleteOrder);
router.get('/find_user_order/:id',VerifyTokenAndAuthorization,CreateOrder);
router.get('/all_orders',VerifyTokenAndAdmin,AllOrder);
router.get('/income',VerifyTokenAndAdmin,MonthlyIncome);


module.exports = router; 