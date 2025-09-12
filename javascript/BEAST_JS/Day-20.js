// Write a program that asks the user for two numbers and divides them.
// If the denominator is 0, throw an error "Division by zero not allowed".
// Use catch to display the error.
// Use finally to print "Operation finished".
const prompt = require("prompt-sync")(); 
let num1=Number(prompt("Enter a number: "));
let num2=Number(prompt("Enter a number: "));
try{

    if(num2==0)
    {
        throw new Error("Division by zero is not allowed")
    }
    else{
    let div=0 
    div=num1/num2; 
    console.log("Division",div);  
    }
}
catch(error)
{
    console.log(`Error = ${error}`);
}
finally{
    console.log("Operation Finished");
}



