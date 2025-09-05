class Teacher{
    id;
    name;
    address;
    #salary;
    subject;

    constructor(id,name,address,salary,subject)
    {
        this.id=id;
        this.name=name;
        this.address=address;
        this.#salary=salary;
        this.subject=subject;
    }
    get_sal()
    {
        return this.#salary;
    }
    display()
    {
        console.log(this.id);
        console.log(this.name);
        console.log(this.address);
        console.log(this.get_sal());
        console.log(this.subject);
    }
}
const t1=new Teacher(6571,"Biraj","Kathmandu",200000,"Computer");
t1.display()
class Student extends Teacher{
    id;
    name;
    address;
    faculty;

    constructor(id,name,address,faculty)
    {
        super(id,name,address)
        this.faculty=faculty
    }
    display()
    {
        super.display()
    }

}
const S1=new Student(6677,"sandesh","Butwal",180000,"BIT") 
S1.display()