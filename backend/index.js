import dotenv  from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from './routers/user.route.js'
import { mongoConfig } from "./config/mongo.config.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

dotenv.config();

 const Port = process.env.PORT;
    
mongoConfig();

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
  methods:["GET","POST","PUT","DELETE"]
}))

app.use('/user',userRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(Port, () => {
  console.log("Port is runninng ", Port);
});
