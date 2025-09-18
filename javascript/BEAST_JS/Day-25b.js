export function add(a,b)
{
    return a+b
}
export function sub(a,b)
{
    return a-b
}
export let mul=(a,b)=>{
    return a*b
}
export function div(a,b)
{
    return a/b
}
export function greet(name){
    console.log("Hello ",name); 
}

export class Student{
    name
    age
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }

    display()
    {
        console.log(this.name);
        console.log(this.age);
    }
}
