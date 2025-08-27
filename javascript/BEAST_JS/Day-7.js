//Array

Users=["User1","User2","User3"]
console.log(Users);
Users.push("User4")             //add element at last
console.log(Users);
Users.unshift("USer0");         //add element at first
console.log(Users);
console.log(Users.pop())           //remove element at last and return last element
console.log(Users.shift());        //remove element at first and return first element    
console.log(Users);
console.log(Users[Users.length-1])
Users[1]="USers222"                         //modify
console.log(Users[1]);
console.log(Users);
console.log(Users.at(-1));

// Create a program where:
// You have an array of objects called students.
// Each object should contain a student's name, age, and marks.
// Write a function called addStudent(name, age, marks) that adds a new student object into the array.
// Write another function called displayStudents() that prints all students with their details.
// Write a function called getAverageMarks() that calculates and returns the average marks of all students in the array.




let Students=[];

function addStudent(name,age,marks)
{
    let Student={
        name:"",
        age:0,
        marks:0
        
    }
    Student.name=name;
    Student.age=age;
    Student.marks=marks;
    Students.push(Student)
    displayStudents()
}

function displayStudents()
{
    for( let i=0;i<=Students.length-1;i++)
    {
        console.log(Students[i]);
    }
    getAverage();
}

function getAverage()
{ let total=0
    for(let i=0;i<=Students.length-1;i++)
    {
       
         total=total+Students[i].marks
    }
    total=total/(Students.length)
    console.log("Average = ",total);
}
addStudent("Araj",21,99);
addStudent("Sam",21,50);
addStudent("Sandesh",22,98);


