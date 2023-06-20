 import Cart from "../models/Cart.model"
// CREATE

export const CreateCart = async(req,res)=>{
      const newCart = new Cart(req.body)

      try{
      const cart =  await newCart.Save();
      res.status(200).json(cart);
      }catch(err){
        res.status(500).json(err);
      }

          
}

// UPDATE 

export const UpdateCart = async(req,res)=>{
    try{
    const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
           $set:req.body  
        },
        {new:true}
    )
    res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
}


// DELETE 

export const DeleteCart = async(req,res)=>{
    try{ 
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("The item is Deleted.");
    }catch(err){
        res.status(500).json(err);
    }
}

// FIND USER CART 

export const FindUserCart = async(req,res) =>{
    try{
        const cart =  await Cart.findById(req.params.id);
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
}

// ALL CARTS

export const AllCart = async(req,res) =>{
    try{
        const carts  = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
}