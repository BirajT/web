// Student Object with Function
// Write a constructor function Student(name, age, grade) that:

// Stores the student’s name, age, and grade

// Has a method display() that prints "Name: ___, Age: ___, Grade: ___"

// Create 3 student objects and display their info.

let Student={
 name:"",
 age:0,
 grade:""

};

function input(nam,ag,gr)
{
    Student.name=nam;
    Student.age=ag;
    Student.grade=gr;
    display();
}

function display()
{
    console.log("Name= ",Student.name);
    console.log("Age=",Student.age);
    console.log("Grade=",Student.grade);
}

input("Araj",21,99)
input("Sandesh",2,98)
input("Bigyan",21,100)


