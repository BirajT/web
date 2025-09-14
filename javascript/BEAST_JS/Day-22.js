// Write a JavaScript program that takes an array of numbers as input and:
// Prints all even numbers.
// Calculates the sum of all odd numbers.
// Finds the largest number in the array without using Math.max().
// 👉 Example input: [3, 7, 2, 8, 5, 10]
// 👉 Expected output:
// Even numbers: 2, 8, 10
// Sum of odd numbers: 15
// Largest number: 10
a=[];
b=[];
function input()
{
    for(i=0;i<6;i++)
    {
        const prompt = require("prompt-sync")();
        let num=Number(prompt("Enter a number: "));
        a.push(num);
        console.log(a[i]);
        b=a.filter(function(value,index,arr)
        {
            return value%2==0;
        })
        
    }
    
    console.log(b);
    
}
input()