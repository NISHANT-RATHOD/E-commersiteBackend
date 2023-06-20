import express from 'express'
import { AllUser, DeleteUser, FindUser, UpdateUser, UserStat } from '../controller/User.controller';
import { VerifyTokenAndAdmin, VerifyTokenAndAuthorization } from '../controller/VerifyToken.controller';
const router = express.Router();


router.put('/update/:id',VerifyTokenAndAuthorization,UpdateUser);
router.delete('/delete/:id',VerifyTokenAndAuthorization,DeleteUser); 
router.get('/find/:id',VerifyTokenAndAdmin,FindUser); 
router.get('/all_users',VerifyTokenAndAdmin,AllUser);
router.get('/stat',VerifyTokenAndAdmin,UserStat);

export default router;