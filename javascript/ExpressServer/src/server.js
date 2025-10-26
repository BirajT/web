import express from 'express'
import userRoutes from './routes/user.route.js';

const PORT=8080

const app=express()

app.use(express.json())



app.use('/api/users',userRoutes)

app.listen (PORT,()=>{
    console.log(`server running at http:///localhost:${PORT}`);
    console.log('please ctrl+c to close the server');
})