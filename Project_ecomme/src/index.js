import express from "express"
import { connectDB } from "./config/db.config.js"

const PORT=8080
const app=express()

connectDB()

app.get('/',(req,res)=>{
    res.status(200).json({
        message:("server is up and running"),
    })
})

app.use((error,req,res,next)=>{
    const message=error?.message ||"something went wrong"
    res.status(500).json({
        message:message,
        status:"error",
        sucess:false,
    })
}
)
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})