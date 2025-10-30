import express from 'express'
import userRouter from './routes/user.router.js'
import mongoose from "mongoose"
const PORT=8080;

const app = express()

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/new_db').then(()=>{
    console.log("Data base Connected")
}).catch((error)=>{
    console.log(error);
});

app.use(express.json({limit :'5mb'}))

app.use('/api/user',userRouter)


app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http:${PORT}`);
})