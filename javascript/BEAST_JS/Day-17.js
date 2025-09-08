//hell call back
// promise is an object {} which repred

console.log("Start");
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //task
        //resolve('task completed')
        reject("Something went wrong");
    },2000);
});

console.log(promise);

promise
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
    console.log("end");

    //
    console.log("Start");

    
        
    
    
