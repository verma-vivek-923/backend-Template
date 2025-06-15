import { user_modal } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { setToken } from "../token/setToken.js";

export const signUp = async (req, res) => {
  const {userName, name, role, password } = req.body;
  console.log(userName,name, role, password);
  
  if(!userName || !name || ! role || !password){
     
     console.log("All Field required");
     return res.status(500).json({message:"All Field Required"})
  }

const find_user=await user_modal.findOne({username:userName});

if(find_user){
   console.log(find_user)
 return  res.status(500).json({message:"User Already Exists"})
}

const hashed_pass=await bcrypt.hash(password,10)

try {  
   const new_user = await new user_modal({
     name,
     role,
     username:userName,
     password:hashed_pass,
   });
 
   await new_user.save();
   const token=await setToken(find_user._id,res);
 
   res.status(200).json({ message: "success" ,new_user,token});
} catch (error) {
   console.log(error)

  return res.status(500).json({message:"error",error})
}
};

export const login=async (req,res)=>{
   const {userName,password}=req.body;

   console.log(userName,password)

   const find_user=await user_modal.findOne({username:userName})
   let isMatch;

   // if(!find_user){
   //   return res.status(500).json({message:"User Not found"})
   // }

   if(find_user){
      isMatch=await bcrypt.compare(password,find_user.password)
   }

   if(!find_user || !isMatch){
    return  res.status(500).json({message:"Username or Password is incorrect"})
   }
   
   const token=await setToken(find_user._id,res);

   return  res.status(200).json({message:"Login Successfull",find_user,token})
}

export const getAllUser=async (req,res)=>{

   try {
       const find_all=await user_modal.find();
       const no_of_user=await user_modal.countDocuments(); //count no of records

    return res.status(200).json({no_of_user,find_all})

   } catch (error) {

      console.log(error)
      return res.status(500).json(error)

   }
    
}

export const MyProfile=async (req,res)=>{
   const loged_User=await req.loged_User;

   console.log(loged_User)

   res.status(200).json(loged_User)
}
