import setJwt from 'jsonwebtoken'
import { user_modal } from '../models/user.model.js';

export const isAuthenticated=async (req,res,next)=>{

        const token=req.cookies.authToken;

        if(!token){
            res.status(500).json({message:"User Not Authenticated"})
        }

        const token_decoded=setJwt.verify(token,process.env.JWT_SECRET)

        // console.log(token_decoded) 
        const loged_User=await user_modal.findById(token_decoded.userId)

 next()
} 