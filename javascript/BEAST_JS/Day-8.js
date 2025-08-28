// // // for each
// let number=[2,3,4,5,7,9,1]
// // let re=number.forEach((value,index,arr)=>{
// //     console.log(value,index,arr);
// // })
// //forEach
// let numbers=[2,5,1,3,8,7];
// numbers.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// })

// //map
// let m=numbers.map((value,index,arr)=>{
//     return value*2;
// })
// console.log(m);

// // console.log(number);

// // //map
// // const doubled =number.map((value,index,arr)=>{
// //     return value*2;
// // })
// // // const doub=number.map((value)=>{value+index})

// // console.log(number);
// // console.log(doubled);
// // // console.log(doub);

// // //filter
// // const filt=number.filter((value)=>
// // {
// //     if(value%2===0)
// //     {
// //         return value
// //     }
// // })
// // console.log(filt);

// // //reduce
// // const sum=number.reduce((prev,value)=>{
// //     return prev+=value
// // },10)
// // console.log(sum);
// // console.log(number);

// // //findIndex
// // let res= number.find((value)=>{
// //     if(value>5)return value
// //     })
// //     console.log(res);

// //     //slice 
//     const arr_copy=number.slice(1,5)
//         console.log(arr_copy);
//     //splice
// //     number.splice(2,2,65,68,30)
// //     console.log(number);
// //     //searching
// //     indexof
// //     lastindexof

let numbers=[1,2,3,4,5,6,2,7]
//Iteration 

// forEach()
numbers.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

//map()
let num=numbers.map((value,index,arr)=>{
    return value*2
})
console.log(num);

//Filtering and searching

//filter()
let a=numbers.filter((value,index,arr)=>{
    return value%2==0
})
console.log(a);

//find()

console.log(numbers);
let b=numbers.find(numbers=>numbers%2===0)
console.log(b);
console.log("a");