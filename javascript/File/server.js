import http from 'http'

const server =http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);


if(req.url==='/')
{
    res.end("<h1> hello from server</h1>");
}

if(req.url==='/users')
{
    res.end("<h1> All Users</h1>");
}

if(req.url==='/about')
{
    res.end("<h1> About us</h1>");
}
});
            //3000
server.listen(8080,()=>{
    console.log(`server is running at port http://localhost:8080`);
})