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
var d;
var n = 53;
var e = null;
var f;
d = false;
//Array
var numbers = [1, 2, 3, 4];
var strings = ["abc", "cde"];
numbers.push(50);
// tuples
var tuple = ['abc', false, 3];
var user = {
    name: '',
    email: ''
};
var user2 = {
    name: "",
    email: "",
};
//function
var greet = function (name) {
    console.log("good morning", name);
};
greet("Ram");
//greet(123)
//add two numbers
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add);
add(5, 6);
//enum
// enum Role{
//     ADMIN='Admin',
//     SUPER_ADMIN='SUPER_ADMIN',
//     USER='USER'
// }
// console.log(Role.ADMIN);
// console.log(Role.USER);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p1 = new Person("biraj", 23);
