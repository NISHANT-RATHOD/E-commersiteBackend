import express from 'express'
import { Login, Register } from '../controller/Auth.controller';
const router = express.Router();

router.post('/checking',(req,res)=>{
  res.json('Checking...');
})

router.post('/register',Register);
router.post("/login",Login);

export default router;