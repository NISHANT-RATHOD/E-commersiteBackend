import express from "express"
import { AllCart, CreateCart, DeleteCart, FindUserCart, UpdateCart } from "../controller/Cart.controller";
import { VerifyToken, VerifyTokenAndAdmin, VerifyTokenAndAuthorization } from "../controller/VerifyToken.controller";

const router = express.Router()


router.post('/create',VerifyToken,CreateCart);
router.put('/update/:id',VerifyTokenAndAuthorization,UpdateCart);
router.delete('/delete/:id',VerifyTokenAndAuthorization,DeleteCart);
router.get('/find_user_cart/:id',VerifyTokenAndAdmin,FindUserCart);
router.get('/allcart',VerifyTokenAndAdmin,AllCart);

export default router;