import express from "express"
import 'dotenv/config'
import { connectDB } from "./config/db.config.js"

const PORT=process.env.PORT
const app=express()

connectDB()

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is up and running "
    });
});

app.listen(PORT,()=>{
    console.log(`Database is connected at http://localhost ${PORT}`);
})  