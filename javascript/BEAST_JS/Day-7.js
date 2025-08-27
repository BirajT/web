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

// Employee Manager
// Create an employees array.
// Each object should have id, name, department, salary.
// Write functions:
// addEmployee(id, name, department, salary) → adds a new employee.
// listEmployees() → prints all employees.
// findEmployeeById(id) → returns employee details.
// getAverageSalary() → calculates average salary.

let Employees=[];

function addEmployee(id,name,department,salary)
{
    Employee={
        id:0,
        name:"",
        department:"",
        salary:0
    }
    Employee.id=id;
    Employee.name=name;
    Employee.department=department;
    Employee.salary=salary;
    Employees.push(Employee)
    listsEmployees()
}

function listsEmployees()
{
    for(i=0;i<=Employees.length-1;i++)
    {
    console.log(Employees[i]);
    }
    getAverageSalary();
}

function findEmployeeById(id)
{
   for(i=0;i<=Employees.length-1;i++)
   {
    if(Employees[i].id==id)
    {
        console.log(Employees[i]);
    }
   }

}

function getAverageSalary()
{
    let Avg=0;
    for(i=0;i<=Employees.length-1;i++)
    {
    Avg=Avg+Employees[i].salary
    }
    console.log("Average Salary = ",Avg);
}
addEmployee(6571,"Biraj","Block-B",205000)
addEmployee(6555,"Araj","Block-B",60000)
addEmployee(7351,"Sandesh","Block-A",105000)
addEmployee(5643,"Bigyan","Block-C",108000)
findEmployeeById(7351);