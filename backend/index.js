import express from 'express';
import mongoose from 'mongoose';

const app=express();

mongoose.connect("mongodb://0.0.0.1:27017/my-db")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(4500)