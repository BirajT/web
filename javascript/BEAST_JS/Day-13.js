// scope and hosting

console.log(x); // in var it will show undefined 
var x=20;      
console.log(x);

greet()
function greet()
{
    console.log("Hello");
}
greet()

// console.log(y);
// const y=20;       //(cannot be access before initializtion tdz(temporal dead zone)
// console.log(y);

console.log(z);
const z=20;       //(cannot be access before initializtion tdz(temporal dead zone)
console.log(z);

fun1()      //fun1 is not defined so it will not identify there is function in fun1 var
var fun1=function ()
{
    console.log("function call");
}
fun1()

//error 
//1. Reference error
//2. Type error 
// 3. Syntax error