//class
//constructor()
//private=#password
class person{
    name;
    email;
    #password;
    constructor(name,email,password)
    {
        this.name=name;
        this.email=email;
        this.#password=password;
    }
    get_name()
    {
        return this.name;
    }
    get_password()
    {
        return this.#password
    }
}
const person1=new person("Biraj","birajtamrakar803@gmail.com","Tiger")
const person2=new person("Hari","Hari899@gmail.com","hara")
console.log(person1);
console.log(person2);
console.log(person1.get_name());
console.log(person1.get_password());


class student extends person{
    #password
    constructor(name,email,password,grade,faculty)
    {
        super(name,email,password)
        this.grade=grade
        this.faculty=faculty
    }
    
}
const student1=new student("sandesh","sandes803gmail.com","two",12,"BIT")
console.log(student1);
console.log(student1.get_password());

//static
class Calculator{
       static add(a,b)
        {
            return a+b;
        }
        static sub(a,b)
        {
            return a-b;
        }
    
}
const obj=new Calculator
console.log(Calculator.add(2,3));
//obj.add(5,5)      cannot be access static function with obj should be call using class

class Employee
{
    constructor(){}
    start()
    {
        this.#turn_on_machine()
        this.#add_milk()
        this.#add_coffee()
        console.log("Coffee is ready");
    }
    #turn_on_machine()
    {
        console.log("turning on");
    }
    #add_milk()
    {
        console.log("add milk");
    }
    #add_coffee()
    {
        console.log("add coffee");
    }
}
const a=new Employee()
a.start()