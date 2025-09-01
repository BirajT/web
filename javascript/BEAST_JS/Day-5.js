//Function

//Syntax
function function_name()
{
    //function body;
}
//without value
function Greet()
{
    console.log("Hello");
}

// with value
function Greet(name)
{
    console.log("Hello",name);
}
Greet();
Greet("Ram")


function Add(a,b)
{
    let sum=a+b;
    console.log("Sum="+sum);
}

Add(2,3);


function Result(a,b)        //a,b is parameter
{
    return a+b;

}

console.log(Result(2,3));  //2,3 is arguments


// Default parameter
function namaste(name="hari")
{
    console.log("namaste",name);
}
namaste();


function Multiply(a=5,b=5)
{
    return a*b;
}

console.log("Multiply = ",Multiply());

//Function expression
let diff=function(a,b)
{
    return a-b;
}
console.log(diff(5,2));

//Arrow function
let square=(num)=>{
    return num**2
}
console.log(square(2));

const Square2=num=>num*num
console.log(Square2(5));


//callback function
const child =function (name){
    console.log("child",name);
}
const parent =function(callback)
{
    console.log("parent");
    callback("john")

}
parent(child)

parent(function(name){
    console.log("Anomynous");
})



///wap to find max 3 number

function Greatest(a,b,c)
{
if(b<a && c<a)
{
    console.log(a,"is the greatest number");
}
else{
    if(c<b)
    {
        console.log(b,"is the Greatest number");
    }
    else {
        console.log(c,"is the greatest number");
    }
}


}
Greatest(2,3,4)
Greatest(10,3,2)
Greatest(2,20,3)


//reverse string

function Reverse(word)
{
    Rev="";
    for(i=word.length-1;i>=0;i--)
    {
        Rev=Rev+word[i];
    }
console.log(Rev);
}
Reverse("Biraj")


function Reverse(word)
{
    let rev 
    for(i=word.length-1;i>=0;i--)
    {
        rev=rev+word[i];
    }
    console.log(rev);
}

//palindrome
function Palindrome(num)
{
    let rev=0
   while(num!=0){
    n=num%10
    rev=rev*10+n
    num=Math.floor(num/10)
   }
console.log(rev);

}

Palindrome(123)


//Fibonaccci series

// function Fibonnaci()
// {
//     a=0,b=1
//     console.log(a);
//     console.log(b);
//     result=1
//     for(i=1;i<=10;i++)
//     {
       
//        a=b;
//        b=result;
//         result=a+b
//        console.log(result);
//     }   
    
// }
// Fibonnaci()

let gt=function(a,b,c)
{
    if(b<a && c<a)
{
    console.log(a,"is the greatest number");
}
else{
    if(c<b)
    {
        console.log(b,"is the Greatest number");
    }
    else {
        console.log(c,"is the greatest number");
    }
}

}
gt(2,3,5);

//gt using arrow function
let hn=(a,b,c)=>{
    if(b<a && c<a)
{
    console.log(a,"is the greatest number");
}
else{
    if(c<b)
    {
        console.log(b,"is the Greatest number");
    }
    else {
        console.log(c,"is the greatest number");
    }
}

}
hn(5,6,7);


//callback function
// function parents(word)
// {
//     console.log("i am parrent");
//     word()
// }

// function childs()
// {
//     console.log("call from p");
// }

// parents(childs)









