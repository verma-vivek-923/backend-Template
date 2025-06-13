import mongoose from "mongoose";

export const mongoConfig = ()=>{
   
    
    try {
      mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connected");
      });
    } catch (error) {
      console.log(error);
    }

}
