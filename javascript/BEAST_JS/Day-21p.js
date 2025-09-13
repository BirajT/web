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