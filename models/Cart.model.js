const mongoose = require ("mongoose");

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

module.exports = mongoose.model("Cart", schema);
