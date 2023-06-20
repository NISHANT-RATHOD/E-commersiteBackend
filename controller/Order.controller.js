import Order from "../models/Order.model"

// CREATE ORDER

export const CreateOrder = async(req,res)=>{
    const newOrder = new Order(req.body)
    try{
    const order = await newOrder.save();
    res.status(200).json(order); 
    }catch(err){
        res.status(500).json(err);
    }
}

// UPDATE ORDER 

export const UpdateOrder = async(req,res) =>{
   try{
    const updatedorder = await Order.findByIdAndUpdate(
        req.paramas.id,
        {
          $set:req.body
        },
        {new:true}
    );
    res.status(200).json(updatedorder);
   }catch(err){
    res.status(500).json(err);
   }
}

// DELETE ORDER 

export const DeleteOrder = async(req,res) =>{
    try{
      await Order.findByIdAndDelete(req.params.id)
      res.status(500).json("Your Order has been Delete.");
    } catch(err){
      res.status(500).json(err);
    }
}

// GET USERS ORDER 

export const GetUserOrder = async(req,res) =>{
    try{
    const UserOrder = await Order.find(req.params.id);
    res.status(200).json(UserOrder);
    }catch(err){
    res.status(500).json(err);
    }
}

// ALL ORDER 

export const AllOrder = async(req,res) =>{
    try{
        const allorder = await Order.find();
        res.status(200).json(allorder);
    }catch(err){
        res.status(500).json(err);
    }
}

// GET MONTHLY INCOME

export const MonthlyIncome = async(req,res) =>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const prevMonth = new Date(date.setMonth(lastMonth.getMonth()-1));

    try{
      const income = await Order.aggregate([
        {
            $match:{createdAt:{$gte:prevMonth}}
        },
        {
            $project:{
                month:{$month:'$createdAt'},
                sales:"$amount"
            }
        },{
            $group:{
                _id:"$month",
                total:{$sum:"$sales"}
            }
        }
      ]);
      res.status(200).json(income);    
    }catch(err){
        res.status(500).json(err);
    }
}