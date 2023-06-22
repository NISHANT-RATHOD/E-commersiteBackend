const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserRouter = require ("./routers/user.router");
const AuthRouter = require ("./routers/auth.router");
const ProductRouter = require ("./routers/product.router");
const CartRouter = require ("./routers/cart.router");
const OrderRouter = require ("./routers/order.router");
const dotenv = require("dotenv");

dotenv.config();
const app  = express();
const DB = process.env.DATABASE
const PORT  = process.env.PORT || 5000
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


mongoose.connect(DB)
  .then(() =>{
      console.log("mongodb started.");
  }).catch(()=>{
      console.log("mongodb connection failed.");
  })

app.listen(PORT,()=>{
    console.log("backend Server is Running");
})