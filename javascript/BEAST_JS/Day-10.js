// Loops
//While
//do While



let i=0;
while(i<10)
{
    console.log("While",i);
    i++;
}

i=0;
do{
    console.log("do while",i);
    i++
}while(i<10)

//object     
//for in
//for of
let User=[2,3,1,6,5]
for(key in User) 
{
    console.log(User);
    console.log(User[key]);
}

for(value of User)
{
    console.log(User);
}
for(value of "User")
{
    
    console.log(value);
}


for(i=0;i<=10;i++)
{

    if(i%2==0)
    {
        continue
    }
    console.log("odd numbers=",i);
}
