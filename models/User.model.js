import mongoose from "mongoose";

const {Schema}  =  mongoose;
const schema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
      type:String,
      required:true,
      unique:true   
    },
    isAdmin:{
        type:Boolean,
        unique:true,
        default:false        
    }
},{timestamps:true})

const User = mongoose.model("User", schema);
export default User;