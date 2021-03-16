class Bank
    {
        account_no;
        name;
        balance;
        withdrawl(amount)
            {   
                if(amount >this.balance)
                {
                    console.log("Insufficient Balance");
                    return;
                }
                else
                {
                    this.balance=this.balance-amount;
                    console.log("Final Balance: " + this.balance);
                }

            }
        deposit()
            {
                balance =  this.balance + this.deposit();
            }
    }

var customer1 = new Bank();
customer1.name = "Raghav";
customer1.account_no="123456";
customer1.balance=8000;
console.log(customer1);
//customer1.withdrawl(1000);

//customer1.deposit(2000);
