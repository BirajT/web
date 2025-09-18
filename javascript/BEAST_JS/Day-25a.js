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

