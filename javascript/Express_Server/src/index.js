import express from "express"
import dotenv from 'dotenv'
import userRoutes from "./routes/user.router.js"
import {connectDB} from "./config/db.config.js"
dotenv.config()
const PORT=process.env.PORT;
const app=express()

connectDB()

app.use(express.json({ limit: "5mb" }));

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'server is up & running'
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running at http:localhost:${PORT}`);
    console.log("press ctrl+c to close the server");
});