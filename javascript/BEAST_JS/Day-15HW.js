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
    faculty;
    fees;

    constructor(id,name,address,fees,subject,faculty)
    {
        super(id,name,address,0,subject)
        this.fees=fees;
        this.faculty=faculty
    }
  displays()
  {
     console.log("Student Info:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Address:", this.address);
        console.log("Faculty:", this.faculty);
        console.log("Fees:", this.fees);
        console.log("Subject:", this.subject);
  }
}
const S1=new Student(6677,"sandesh","Butwal","800000","BIT","Sci and Tech") 
S1.displays()