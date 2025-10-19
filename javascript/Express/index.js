import http from 'http';
import express from 'express'

import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const PORT=8080

//creating express instance
const app=express()

//creating server
const server =http.createServer(app);



//request handler for url /
app.get('/', (req,res)=>{
    //api logic

    res.send('<h1>HEllo from server</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About_page')
})

  //using routes
    app.use('/users',userRoutes) 
    app.use('/products',productRoutes)
    
 //product(get,post,put delete)
 

//listening
server.listen(PORT,()=>{
    console.log(`server is up and running at http://localhost:${PORT}`);
});

//expressjs