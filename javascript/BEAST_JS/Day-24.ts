//Create an array of numbers and print the sum of all numbers.
let a:number[]=[1,2,3,4,5,6,7,8,9]
let sum=a.reduce(function(prev,value,index,arr)
{
    return prev+value;
},0)
console.log("sum = ",sum);

//advanced types
//union (|) and intersection (&)
type ID =string | number

// literal type
//custom type
type status ="sucess"|'error'|'pending' 

const wrapper=<T>(value:T | T[]):T[]=>{
    if(Array.isArray(value))
    {
        return value;
    }
    return [value];
};

interface IBox{
    value:string
}

const stringBox: IBox<string> = {
    value:"box"
}

const numberBox:IBox={
    value:"box"
};