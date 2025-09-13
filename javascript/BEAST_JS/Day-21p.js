//Write a program that prints "Tick..." every 2 seconds continuously.
let count=1;
const a=setInterval(()=>{
    
    console.log("Tick");
    if(count==3)
    {
        clearInterval(a);
    }
    count++;
})

//Write a program that prints "Hello World" after 5 seconds only once.
const b=setTimeout(()=>{
    console.log("Hello World");
},5000);
