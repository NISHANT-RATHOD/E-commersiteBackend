import mongoose from "mongoose";

const {Schema}  =  mongoose;
const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    },
    size:{
        type:Array,
    },
    color:{
        type:Array,
    },
    price:{
        type:String,
        required:true
    },
    inStock:{
        type:Boolean,default:true
    }
},{timestamps:true})

const Product = mongoose.model("Product", schema);
export default Product;