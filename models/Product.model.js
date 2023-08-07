const mongoose = require("mongoose");

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
        type:Array,
        required:true
    },
    inStock:{
        type:Boolean,default:true
    }
},{timestamps:true})

module.exports = mongoose.model("Product", schema);
