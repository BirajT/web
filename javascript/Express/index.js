import http from 'http';
import express from 'express'

import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const PORT=8080


//creating express instance
const app=express()

//creating server
const server =http.createServer(app);

const middleware=(req,res,next)=>{
console.log("Middleware");
console.log(req.user);
if(req.user){
    next()
}
else{
  // req.status(401).json({message:'Unauthorized acess denied'})
   next("unauthorized acess denied")
}
}

const middleware1=(req,res,next)=>{
console.log("Middleware1");
next();
}


app.use(middleware)
app.use(middleware1)

//inbuilt
//parse req body
app.use(express.json())
app.use(express.urlencoded()) //other data type from postman
//app.use(express.static('public'))  (if any img have to show in frontend)

//request handler for url /
app.get('/', (req,res)=>{
    //api logic

    res.send('<h1>HEllo from server</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About_page')
})

  
const errorHandler=(err,req,res,next)=>{
    console.log(err);
    console.log('error handler');
    res.status(500).json({
        message:'Error'
    })
}

//using routes
    app.use('/users',userRoutes) 
    app.use('/products',productRoutes)
    app.use(errorHandler)
    
 //product(get,post,put delete)
 

//listening
server.listen(PORT,()=>{
    console.log(`server is up and running at http://localhost:${PORT}`);
});

//expressjs

//Middleware
//types
//inbuilt
//customs
//thirdparty
//error handler middleware