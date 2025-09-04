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


