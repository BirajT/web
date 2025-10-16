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

app.get('/users/all',(req,res)=>{
    res.json({
        data:[
            {id:1,name:"abc",email:"abc@gmail.com"},
            {id:2,name:"xyz",email:"xyz@gamil.com"},
        ],
        message:'users fetched'
    });
});

//dynamic route {req,params}
app.get ('/users/:id/:name',(req,res)=>{
    console.log(req.params);
    const params=req.params
    
    res.json({
        data:{id:params.id,name:params.name,email:"abc@gmail.com"}
    })
    })

//listening
server.listen(PORT,()=>{
    console.log(`server is up and running at http://localhost:${PORT}`);
});

//expressjs