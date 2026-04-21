let balance = 0;
let transactions = [];

function deposit(amount) {
    if (amount <= 0) {
        console.log("Deposit must be greater than 0");
        return;
    }

    balance += amount;
    console.log("deposited amount: "+amount)
    transactions.push(`Deposited: ₹`+ amount);
}

function withdraw(amount) {
    if (amount <= 0) {
        console.log("Withdrawal must be greater than 0");
        return;
    }

    if (amount > balance) {
        console.log("Insufficient balance");
        return;
    }

    if (amount > 10000) {
        console.log("Max withdrawal is ₹10000");
        return;
    }

    if (balance - amount < 500) {
        console.log("Minimum balance ₹500 required");
        return;
    }

    balance -= amount;
    transactions.push(`Withdrawn: ₹`+amount);
}

function getBalance() {
    console.log("Balance: ₹"+ balance);
}

function getTransactions(){
    console.log("Transactions: "+ transactions);
}

deposit(2000);     
withdraw(2500);     
deposit(1000);    

getBalance();
getTransactions();                     


