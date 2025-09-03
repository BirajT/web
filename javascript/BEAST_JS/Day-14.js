//map
//reduce
//filter
//forEach
// let num=[1,2,3,4,5,6,7,8,9];

// let a=num.map(function(value,index,arr)
// {
//     return value*2
// })
// console.log(a);

// let b=num.filter(function(value,index,arr)
// {
//     return value%2==0
// })
// console.log(b);


// num.forEach(function(value,index,arr)
// {
//     console.log(value*5);
// })

// let c=num.reduce(function(prev,curr)
// {
//     return prev+=curr
// },0);
// console.log("sum",c);

// let Students=["Ram", "Shyam", "Sita", "Gita"]

// Students.forEach(function(value,index,arr)
// {
//     console.log(value,index);
// })

// let nums = [2, 4, 6, 8];
// let a=nums.map(function(value,index,arr)
// {
//     return value*value;
// })
// console.log("Square = ",a);

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let b=numbers.filter(function(value,index,arr)
// {
//     return value%2==0
// })
// console.log(b);

// let marks = [40, 50, 60, 70];
// let c=marks.reduce(function(prev,value,index,arr)
// {
//     return prev+=value
// },0)
// console.log("sum = ",c);

let nums=[10, 20, 25, 30, 35]
let a=nums.filter(function(value,index,arr)
{
    return value>20
})
let b=a.map(function(value,index,arr)
{
    return value*2
})
console.log(b);

let num=[5, 10, 15, 20, 25]

