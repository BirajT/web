import express from "express"
import userRoutes from "./routes/user.router.js"

const PORT=8080;
const app=express()

app.use('/api/user',userRoutes)

app.use(express.json({ limit: "5mb" }));

app.listen(PORT,()=>{
    console.log(`Server is running at http:localhost:${PORT}`);
})