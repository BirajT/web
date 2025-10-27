
import express from 'express'
import userRoutes from './routes/user.router.js'
const PORT=8080;

const app=express()

app.use('/api/users',userRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})