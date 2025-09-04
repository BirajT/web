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