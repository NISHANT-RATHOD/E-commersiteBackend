import mongoose from "mongoose";

const {Schema}  =  mongoose;
const schema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    products:[
       {
        productId:{
         type:String
        },
        quintity:{
            type:Number,
            default:1
        }
       }
    ]
},{timestamps:true})

const Cart = mongoose.model("Cart", schema);
export default Cart;