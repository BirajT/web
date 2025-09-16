//Create an array of numbers and print the sum of all numbers.
let a:number[]=[1,2,3,4,5,6,7,8,9]
let sum=a.reduce(function(prev,value,index,arr)
{
    return prev+value;
},0)
console.log("sum = ",sum);
