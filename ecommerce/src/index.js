import express from 'express'
import { connectDB } from './config/db.config.js'
import authRoutes from "./routes/auth.routes.js"
import categoryRoutes from "./routes/category.routes.js"

const app=express()
const PORT=8080

connectDB()

app.use(express.json({limit:'10mb'}))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is up and running"
    });
});

app.use('/api/categories',categoryRoutes)
app.use('/api/auth',authRoutes)

//error handling middleware 
app.use((error,req,res,next)=>{
    const message=error?.message || "something went wrong"

    res.status(500).json({
        message,
        status:"error",
        sucess:false,
        data:null
    })
})


app.listen(PORT,()=>{
    console.log(`Server is up and running at http://localhost:${PORT}`);
});