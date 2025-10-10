// fs
const fs = require('fs')
fs.writeFile('file.txt','this is content',(err)=>{
    if(err)
    {
        console.log(error);
    }
    else{
        console.log("Task completed");
    }

})
fs.writeFileSync('demo.txt','this is a demo file')

fs.appendFile('file.txt','this is new content',(err)=>{
    if(err)
    {
        console.log(error);
    }
    else{
        console.log("Task completed");
    }})

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('async',data);
    }
})

const data=fs.readFileSync('file.txt','utf-8')
console.log(data);

fs.mkdir('/folder',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('folder');
    }
})

// fs.mkdir('folder/test',{recursive},(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log('folder');
//     }
// })
