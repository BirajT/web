//TypeScript
// let y;
// let x:number;
// x=50;
// y=60;
// y="Hello"

//data types 
//num string null undefined boolean
//? Special types
//* any -> disable type checking
//* unknown ->
//* never ->
//* void ->tsc 

// let a: any=10
// let b:unknown="hello"

// console.log(a.toUpperCase)
// if(typeof b ==="string")
// {
//     console.log(b.toUpperCase);
// }

let d:boolean;
let n=53;
let e=null;
let f:undefined;
d=false;

//Array
const numbers:number[]=[1,2,3,4]
const strings: Array<string>=["abc","cde"]

numbers.push(50)

// tuples
const tuple: [string,boolean,number]=['abc',false,3]


//object
type User ={
    name:string;
    email:string;
    gender?:string;
}

let user:User={
        name:'',
        email:''
    }

    let user2:User={
        name:"",
        email:"",
    }

//function
const greet=(name:string)=>{
    console.log("good morning",name);
}    

greet("Ram")
//greet(123)

//add two numbers
const add=(num1:number,num2:number):number =>{
    return num1+num2
}
console.log(add);


add(5,6);

//enum
// enum Role{
//     ADMIN='Admin',
//     SUPER_ADMIN='SUPER_ADMIN',
//     USER='USER'
// }
// console.log(Role.ADMIN);
// console.log(Role.USER);




class Person{
    name
    age

    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }
}

let p1=new Person("biraj",23)
