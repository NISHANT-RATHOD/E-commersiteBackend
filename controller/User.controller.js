const User = require("../models/User.model");
const CryptoJS = require("crypto-js");

// UPDATE
const UpdateUser = async(req,res)=>{
   if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
    ).toString()
   }
   try{
    const updatedUser =  await User.findByIdAndUpdate(
        req.params.id,{
          $set:req.body 
        },
        {new:true}); 
        res.status(200).json(updatedUser);
   }catch(err){
       res.status(500).json(err);
   }
}

// DELETE
const DeleteUser = async(req,res)=>{
    try{
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("User has been Deleted.")
    }catch(err){
        res.status(500).json(err);
    }
}
 
// FIND
const FindUser = async(req,res)=>{
    try{
      const user = await User.findById(req.params.id);
      const { password ,...others } = user._doc
      res.status(200).json(others);
    }catch(err){
       res.status(500).json
    }
}

// ALL USERS
const AllUser = async(req,res) =>{
    const query = req.query.new 
    try{
        const user = query ? await User.find().sort({_id:-1}).limit(1) : await User.find();
        res.status(200).json(user);
      }catch(err){
         res.status(500).json
      }
}

// USERS STAT 
const UserStat = async(req,res)=>{
    const date = new Date();
    const lasYear = new Date(date.setFullYear(date.getFullYear() -1));

    try{
       const data = await User.aggregate([
        {$match:{createdAt:{ $gte : lasYear }}},
        {
            $project:{
                month:{ $month : "$createdAt"}
            }
        },{
            $group:{
                _id:'$month',
                total:{ $sum : 1 }
            }
        }
       ])
       res.status(200).json(data);
  
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {UpdateUser,DeleteUser,FindUser,AllUser,UserStat}