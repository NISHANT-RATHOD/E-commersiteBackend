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
    ],
    amount:{
        type:Number,
        required:true
    },
    address:{
         type:Object,
         required:true
    },
    status:{
        type:String,
        default:'pending'
    }

},{timestamps:true})

const Order = mongoose.model("Order", schema);
export default Order;