const Jwt = require("jsonwebtoken");

const VerifyToken = (req,res,next)=>{
     const authHeader = req.headers.token 
         const Token = authHeader.split(' ')[2]
     if(authHeader){
        Jwt.verify(Token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(403).json("Token is not valid !!!");
            req.user = user;
            next();    
        }) 

     }else{
        return res.status(401).json("You are not authenticated !!!");
     }
}


const VerifyTokenAndAuthorization = (req,res,next)=>{
    VerifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
           next()
        }else{
            res.status(403).json("You are not allowed.")
        }
    })
}


const VerifyTokenAndAdmin = (req,res,next)=>{
    VerifyToken(req,res,()=>{
        if(req.user.isAdmin){
           next();
        }else{
            res.status(403).json("You are not allowed.")
        }
    })
}

module.exports = {VerifyTokenAndAdmin,VerifyToken,VerifyTokenAndAuthorization}
