//Combine question practice
// Write a JavaScript program using class, object, function, try-catch-finally with the following requirements:
// Create a class BankAccount with properties name and balance.
// Add a function withdraw(amount) inside the class that:
// Throws an error if the amount is greater than the current balance.
// Otherwise, deducts the amount from balance and returns the updated balance.
// Use try-catch-finally inside the withdraw function to handle errors.
// Create an object of BankAccount and perform both a valid and invalid withdrawal.

class BankAccount{
    name;
    balance=1000;

    withdraw(num)
    {
        try{
        if(this.balance<num)
        {
            throw new Error("Insufficient Balance")
        }
        else{
            this.balance-=num
        }
    }
        catch(error) {
            console.log(error.message);
            console.log("Adding 1000 balance");
        }
        finally{
            console.log("Transaction completed");
        }
    }
}

const Acc1=new BankAccount;
const Acc2=new BankAccount;
Acc2.withdraw(500);
Acc1.withdraw(1100);

