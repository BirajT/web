//scope
let a=10;
const b=20;
var c=30;

function soln()
{
    let d=30
    const e=50;
    var f=90;
    console.log(a,b,c);

}
soln();
//console.log(d,e,f);       // d,e,f is not defined   var let const all  

if(true)
{
    let g=10;
const h=20;
var i=30;
console.log(g,h,i);
}
console.log(i);     //var can be access outside block

//lexical scope
function lexical()
{
    let x="Parent"
    function child()
    {
        let y="child"
        console.log(x);
        console.log(y);
    }
    child()
}
lexical()

// // closure
// function counter()
// {
//     let count=0;
//     return function child()
//     {
//         count+=1
//         console.log(count);
//     }
// }
// counter()
// let aa=counter()
// let bb=counter()
// aa()
// aa()
// bb()
// bb()

function counter()
{
    let count=0
    return {
        increment:function()
        {
            count+=1
            console.log(count);
        },
        decrement:function()
        {
            count-=1
            console.log(count);
        },
        reset:function()
        {
            count=0
            console.log(count);
        }

    };
}
const counting=counter()
counting.increment()
counting.increment()
counting.decrement()
counting.decrement()
counting.reset()

//Account(acc_name,initial_amt)
//balance,acc name
//deposit(amt),withdraw,bal_inq,get_detail


function Bank()
{
    Banks=[]
    let Acc_holder={
    name:"",
    amt:0
};
    return {Create_acc : function(name,amt=0)
    {
        Acc_holder.name=name;
        Acc_holder.acc=acc;
        Banks.push(Acc_holder)
    }
    }
      function balance(acc)
    {
        console.log(Acc_holder.name);
        console.log(Acc_holder.amt);
    }

    function deposit(a)
    {
        Acc_holder.amt+=a;
        console.log(`Your deposit of NPR ${a} has been successful.`)
    }
    function withdraw(b)
    {
        Acc_holder.amt-=b
        console.log(`Your withdrawal of NPR ${b} has been successful.`);
    }

}
let aa=Bank("Biraj",1000)
