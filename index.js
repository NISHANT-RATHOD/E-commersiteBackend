import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import UserRouter from "./routers/user.router";
import AuthRouter from "./routers/auth.router";
import ProductRouter from "./routers/product.router";
import CartRouter from "./routers/cart.router"
import OrderRouter from "./routers/order.router"
import dotenv from "dotenv";

dotenv.config();
const app  = express();
app.use(express.json());
app.use(cors());
app.get("/test",(req,res)=>{
   res.json('test success');
})

app.use("/shop/user",UserRouter);
app.use("/shop/auth",AuthRouter);
app.use("/shop/product",ProductRouter);
app.use("/shop/cart",CartRouter);
app.use("/shop/order",OrderRouter);

const DB = process.env.DATABASE  
const PORT = process.env.PORT || 5000
mongoose.connect(DB)
  .then(() =>{
      console.log("mongodb started.");
  }).catch(()=>{
      console.log("mongodb connection failed.");
  })

app.listen(PORT,()=>{
    console.log("backend Server is Running");
})