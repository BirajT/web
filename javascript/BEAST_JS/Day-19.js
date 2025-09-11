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
        if(this.balance>=num)
        {
            this.balance-=num;
            console.log(`Your NPR ${num} has been credited`);
        }
        else{
             throw new Error("Insufficient Balance!");
            }
        }
        catch(error) {
        this.balance+=1000;
        this.withdraw(num)


        }
    }
}

const Acc1=new BankAccount;
const Acc2=new BankAccount;
Acc2.withdraw(500);
Acc1.withdraw(1100);

