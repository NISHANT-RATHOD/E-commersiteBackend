const express = require ('express');
const { AllUser, DeleteUser, FindUser, UpdateUser, UserStat } = require('../controller/User.controller');
const { VerifyTokenAndAdmin, VerifyTokenAndAuthorization } = require('../controller/VerifyToken.controller');
const router = express.Router();


router.put('/update/:id',VerifyTokenAndAuthorization,UpdateUser);
router.delete('/delete/:id',VerifyTokenAndAuthorization,DeleteUser); 
router.get('/find/:id',VerifyTokenAndAdmin,FindUser); 
router.get('/all_users',VerifyTokenAndAdmin,AllUser);
router.get('/stat',VerifyTokenAndAdmin,UserStat);

module.exports = router;