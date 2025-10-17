import http from 'http';
import express from 'express'


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

app.get('/users',(req,res)=>{
    res.json({
        data:[
            {id:1,name:"abc",email:"abc@gmail.com"},
            {id:2,name:"xyz",email:"xyz@gamil.com"},
        ],
        message:'users fetched'
    });
});

//dynamic route {req,params}
// app.get ('/users/:id',(req,res)=>{
//     console.log(req.params);
//     const params=req.params
    
//     res.json({
//         data:{id:params.id,name:params.name,email:"abc@gmail.com"}
//     })
//     })

app.post ('/users',(req,res)=>{
  res.status(201).json({
    message:'Account created'
  })
})
     

  app.put('/users/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`Profile updated for user id ${id}`
    })
  })

  app.delete('/users/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`profile deleted for user id ${id}`
    })
  })
    
 //product
    app.get('/products', (req, res) => {
  res.json({
    data: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Headphones" },
    ],
    message: "Products fetched"
  });
});

app.post ('/products',(req,res)=>{
  res.status(201).json({
    message:'Product added'
  })
})
     

  app.put('/products/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`Profile updated for product id ${id}`
    })
  })

  app.delete('/products/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`product deleted of id ${id}`
    })
  })

     



//listening
server.listen(PORT,()=>{
    console.log(`server is up and running at http://localhost:${PORT}`);
});

//expressjs