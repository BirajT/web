import express from 'express'
import { connectDB } from './config/db.config.js'
import authRoutes from "./routes/auth.routes.js"
import categoryRoutes from "./routes/category.routes.js"
import { errorHandler } from './middlewares/error_handler.middleware.js'

const app=express()
const PORT=process.env.PORT || 8080

connectDB()

app.use(express.json({limit:'10mb'}))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is up and running"
    });
});

app.use('/api/categories',categoryRoutes)
app.use('/api/auth',authRoutes)

app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server is up and running at http://localhost:${PORT}`);
});