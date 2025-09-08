// //aync.js
// console.log("Start");

// //setTimeOut(task,timer(ms))
// setTimeout((user_id,name)=>{
//     console.log("processing",user_id,name);
// },1000,1,"hari");
// console.log("End ");

// //clear Timer
// //clearTimeout(user_id)
// let count=0;
//     //setInterval(task,interval)

// const id=setInterval(()=>{
//     count++
//     console.log(count);
//     if(count===10)
//     {
//         clearInterval(id)
//     }
//    // console.log("interval");
// },1000)

// const getUser=(user_id)=>{
//     setTimeout(()=>{
//         const orders=[
//             {id:1,user_id:user.id,total_amt:100,product_id:2}
//        ] },2000)
// };

// const getOderDetail=(order)=>{
//     setTimeout(()=>{
//         const orders={
//             id:order.id,
//             total_amt:order.total_amt,
//         };
//         console.log("Order Details",orders);
//     },1000);
// };


//    const getOderDetail=(order)=>
//     {
//         getOderDetail(order[0],(order)=>
//         {
//             console.log("final result");
//             console.log(order);
//         })
//     }


const getUser = (user_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: user_id, name: "Biraj" };
            resolve(user);
        }, 1000);
    });
}; 



const getOrders = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orders = [
                { id: 1, user_id: user.id, total_amt: 100, product_id: 2 },
                { id: 2, user_id: user.id, total_amt: 200, product_id: 3 }
            ];
            resolve(orders);
        }, 1000);
    });
};

const getOrderDetail = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const detail = {
                id: order.id,
                total_amt: order.total_amt,
                product_id: order.product_id
            };
            resolve(detail);
        }, 1000);
    });
};

getUser(101)
    .then((user) => {
        console.log("User:", user);
        return getOrders(user);
    })
    .then((orders) => {
        console.log("Orders:", orders);
        return getOrderDetail(orders[0]);
    })
    .then((detail) => {
        console.log("Final Result:", detail);
    })
    .catch((err) => {
        console.error("Error:", err);
    });


