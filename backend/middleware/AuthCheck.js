import setJwt from 'jsonwebtoken'
import { user_modal } from '../models/user.model.js';

export const isAuthenticated=async (req,res,next)=>{

    try {
        
        const token=req.cookies.authToken;

        if(!token){
            res.status(500).json({message:"User Not Authenticated"})
        }
        
        const token_decoded=setJwt.verify(token,process.env.JWT_SECRET)
        
        const find_user=await user_modal.findById(token_decoded.userId)
        
        if(!find_user){
            
            res.status(500).json({message:"User Not Found"})
        }
        
       
        // console.log(find_user) ;
        req.loged_User=find_user;
        // const loged_User=find_user;0
        next();
    } catch (error) {
        console.log(error)
        res.status(500).json({error})

    }
} 