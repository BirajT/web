//Question
//Account(acc_name,initial_amt)
//balance,acc name
//deposit(amt),withdraw,bal_inq,get_detailBank=[];
Bank=[]
function Account(acc_name,initial_amt){
    
    let obj={
        name:"",
        amt:0
    }

    return{
        Input:function(name,initial_balance)
        {
            obj.name=name;
            obj.amt=initial_balance
            Bank.push(obj)
        },
        check_balance:function()
        {
            console.log("Name = ",obj.name);
            console.log("Balance = ",obj.amt);
            
        },

        deposit:function(no)
        {
        obj.amt+=no;
        console.log(`Your deposit of NPR ${no} has been successful.`);
        },

        withdraw:function(num)
        {
        obj.amt-=num
        console.log(`Your withdrawal of NPR ${num} has been successful.`);    
        },

        Bank:function()
        {
            console.log(Bank);
        }
    };
}
const acc1=Account()
const acc2=Account()
const acc3=Account()

acc1.Input("Biraj",1000)
acc1.check_balance()
acc1.deposit(1000)
acc1.check_balance()
acc1.withdraw(500)
acc1.check_balance()
console.log("\n");

acc2.Input("Araj",500)
acc2.check_balance()
acc2.deposit(1000)
acc2.check_balance()
acc2.withdraw(500)
acc2.check_balance()
console.log("\n");

acc3.Input("Sandesh",100)
acc3.check_balance()
acc3.deposit(200)
acc3.check_balance()
acc3.withdraw(100)
acc3.check_balance()
console.log("\n");

console.log(Bank);




