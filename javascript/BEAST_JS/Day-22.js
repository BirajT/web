// Write a JavaScript program that takes an array of numbers as input and:
// Prints all even numbers.
// Calculates the sum of all odd numbers.
// Finds the largest number in the array without using Math.max().
// 👉 Example input: [3, 7, 2, 8, 5, 10]
// 👉 Expected output:
// Even numbers: 2, 8, 10
// Sum of odd numbers: 15
// Largest number: 10
let a=[];
function input()
{
    let sum=0;
    let l=0;
   let c=0;
   let b;
    for(i=0;i<6;i++)
    {
        const prompt = require("prompt-sync")();
        let num=Number(prompt("Enter a number: "));
        a.push(num);
        console.log(a[i]);
       
       
       
    }
     c=a.filter(function(value,index,arr)
        {   
            return value%2==1;
        })
      b=a.filter(function(value,index,arr)
        {
            return value%2==0;
        })
        for(i=0;i<b.length;i++)
        {
         sum+=c[i]
        if(b[i]<b[i+1])
        {
            l=b[i+1];
        }
    }
    
    console.log(b);
    console.log("sum = ",sum);
    console.log("Largest = ",l);
    
}
input()