import express from 'express'
import userRoutes from './routes/user.router.js'


const app = express()
const PORT=8080;

app.use('/api/user',userRoutes)

app.listen(PORT,()=>{
    
        console.log(`Server is running at http://localhost:${PORT}`);
})