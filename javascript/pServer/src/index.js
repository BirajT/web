import express from 'express'
import userRouter from './routes/user.router.js'
const PORT=8080;
const app = express()

app.use(express.json({limit :'5mb'}))

app.use('/api/user',userRouter)


app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http:${PORT}`);
})