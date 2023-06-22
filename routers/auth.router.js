const express = require ('express');
const { Login, Register } = require ('../controller/Auth.controller');
const router = express.Router();

router.post('/checking',(req,res)=>{
  res.json('Checking...');
})

router.post('/register',Register);
router.post("/login",Login);

module.exports = router;