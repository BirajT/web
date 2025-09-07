//aync.js
console.log("Start");

//setTimeOut(task,timer(ms))
setTimeout((user_id,name)=>{
    console.log("processing",user_id,name);
},1000,1,"hari");
console.log("End ");

//clear Timer
//clearTimeout(user_id)
let count=0;
    //setInterval(task,interval)
const id=setInterval(()=>{
    count++
    console.log(count);
    if(count===10)
    {
        clearInterval(id)
    }
   // console.log("interval");
},1000)

const getUser=(user_id)=>{
    setTimeout(()=>{
        const orders=[
            {id:1,user_id:user.id,total_amt:100,product_id:2}
       ] },2000)
};

const getOderDetail=(order)=>{
    setTimeout(()=>{
        const orders={
            id:order.id,
            total_amt:order.total_amt,
        };
        console.log("Order Details",orders);
    },1000);
};
getUser(1,(user)=>
{
    getOders(user,(orders)=>
    {
        getOderDetail(orders[0],(order)=>
        {
            console.log("final result");
            console.log(order);
        })
    })
})