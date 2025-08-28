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