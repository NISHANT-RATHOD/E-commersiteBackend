const express = require ("express");
const { AllCart, CreateCart, DeleteCart, FindUserCart, UpdateCart } = require("../controller/Cart.controller");
const { VerifyToken, VerifyTokenAndAdmin, VerifyTokenAndAuthorization } = require ("../controller/VerifyToken.controller");

const router = express.Router()


router.post('/create',VerifyToken,CreateCart);
router.put('/update/:id',VerifyTokenAndAuthorization,UpdateCart);
router.delete('/delete/:id',VerifyTokenAndAuthorization,DeleteCart);
router.get('/find_user_cart/:id',VerifyTokenAndAdmin,FindUserCart);
router.get('/allcart',VerifyTokenAndAdmin,AllCart);

module.exports = router;