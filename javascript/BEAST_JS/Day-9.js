//control statement
//if
//elseif
//else


    function salary(sal)
    {
        if(sal>150000)
        {
            console.log("You are a senior developer");
        }
        else if(sal<100000 && sal>50000)
        {
            console.log("You are a mid developer");
        }
        else{
            console.log("You are juniour developer");
        }
        
    }
    salary(60000)


    //switch case
    let day=6

    switch(day)
    {
        case 1:
        case 2:{
            console.log("weekend");
            break;
        }
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:{
            console.log("work day");     
            break;       
        }      
        default:{
            console.log("Enter betweeen 1-7");
            break;
        }      
    }

//Question

    let Students=[]
    function input(name,grade,marks,sec)
    {
       let Student={
            name:"",
            grade:"",
            marks:[0,0,0,0,0],
            sec:""
        }
        Student.name=name;
        Student.grade=grade;
        Student.marks=marks;
        Student.sec=sec;
        Students.push(Student)
        console.log(Student.name);
        console.log(Student.grade);
        console.log(Student.marks);
        console.log(Student.sec);

        calcu(Student)
        
         
    }
    function calcu(Student)
    {
        let Avg
         let sum=Student.marks.reduce((prev,curr)=>prev+curr,0)
            Avg=sum/Student.marks.length;
            console.log("average=",Avg);
            Student.Avg=Avg

            if(Avg>=0 && Avg<=30)
            {
                Student.score="F"
            }
            else if(Avg>=31 && Avg<=50)
            {
                Student.score="D"
            }
            else if(Avg>=51 && Avg<=70)
            {
                Student.score="C"
            }
            else if(Avg>=71 && Avg<=90)
            {
                Student.score="B"
            }
            else if(Avg>91 && Avg<100)
            {
                Student.score="A"
            }
            else{
                console.log("please input between 0 to 100");

            }

            console.log(`${Student.name}-${Student.grade}-${Student.marks}-${Student.sec}-${Student.score}-${Student.Avg}`);
        }
        
        

    input("Biraj",15,[90,80,70,50,50],"Arnapurna")
    input("Araj",15,[80,85,90,89,88],"Kanchanjunga")
    input("Sandesh",12,[60,70,77,87,88],"Sagarmatha")
    

    
    // for(i=0;i<Students.length;i++)
    // {
    //     console.log(Students[i])
    
    // let a=Students[i].marks.filter((value,index,arr)=>{
    //             return value>=32
    //     })
    //     console.log("a=",a);
    // }
