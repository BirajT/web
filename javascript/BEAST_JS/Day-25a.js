// Create a file math.js that exports add, sub, mul, div functions.Import them in app.js and test each one.

import {add,sub,mul,div,greet,Student} from "./Day-25b.js"
console.log(add(5,5));
console.log(sub(10,5));
console.log(mul(2,2));
console.log(div(5,5));


// Create a file greet.js with a default export function greet(name) that returns "Hello <name>".Import it in main.js and print greeting for your own name.

greet("Biraj")

// Create a file student.js that exports a class Student with properties name, age, and a method display().Import it in school.js and create 2 students.
const stu=new Student("bir",32)
stu.display();

//set
let a=[1,2,2,3,4,4,5,5,6,6,6,6,7,8]     //removes duplicates
let numbers= new Set(a)
console.log(numbers);


//Map
let myMap=new Map()
myMap.set("name","Biraj")
myMap.set("Age",23)

console.log(myMap.get("name"));
console.log(myMap.get("Age"));