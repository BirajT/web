import 'dotenv/config'
import express from "express"
import { connectDB } from './config/db.config.js'
import { errorHandler } from "./middleware/error_handler.middleware.js"
import authRoutes from './routes/auth.routes.js'
import userRoutes from "./routes/user.route.js"
import menuRoutes from "./routes/menu.route.js"
const PORT=process.env.PORT
const app=express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/menu',menuRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        messsage:"server is up and running"
    });
});
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Database is connected at http://localhost:${PORT}`);
})