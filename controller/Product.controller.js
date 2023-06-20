import Product from "../models/Product.model"

// ADD PRODUCT 
export const AddProduct = async(req,res)=>{
    const newProduct = new Product(req.body)

    try{
        const SaveProduct = await newProduct.save();
        res.status(200).json(SaveProduct);
    }catch(err){
        res.status(500).json(err)
    }
}

// UPDATE PRODUCT

export const UpdateProduct = async(req,res)=>{
 try{
        const updatedProduct =  await Product.findByIdAndUpdate(
            req.params.id,{
                $set:req.body 
             },
            {new:true}); 
            res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err)
    }
}

// DELETE PRODUCTE

export const DeleteProduct = async(req,res)=>{
    try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted Successfully.")
    }catch(err){
        res.status(500).json(err);
    }
}

// FIND PRODUCT 

export const FindProduct = async(req,res)=>{
    try{
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
}


// ALL PRODUCTS 

export const AllProduct = async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try{
       let products;
       if(qNew){
        products =  await Product.find().sort({createdAt:-1}).limit(1)
       }else if(qCategory){
        products = await Product.find({
            categories:{
                $in:[qCategory],
            }});
       }else{
           products = await Product.find();
       }
       res.status(200).json(products)
    }catch(err){
        res.status(500).json(err);
    }
}