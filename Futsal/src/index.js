import express from "express"
PORT=8080
const app=express()

app.use('/',)

app.listen(PORT,()=>{
    console.log(`Database is connected at http://localhost ${PORT}`);
})  