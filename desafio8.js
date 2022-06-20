// Operações Bancárias

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if(transaction.type === 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higher = 0;
    let higherTransaction;

    for(transaction of user.transactions) {
        if(transaction.type === type && transaction.value > higher) {
            higher = transaction.value;
            higherTransaction = transaction
            
        }
    }

    console.log(higherTransaction);
}

function getAverageTransactionValue() {
    let sum = 0;

    for(let transaction of user.transactions) {
        sum += transaction.value;
    }

    const average = sum / user.transactions.length;
    console.log(average);
}

function getTransactionsCount() {
    let credit = 0;
    let debit = 0;

    for(let transaction of user.transactions) {
        if(transaction.type === 'credit') {
            credit++;
        } else {
            debit++;
        }
    }

    const count = {
        credit,
        debit
    };

    console.log(count);
}

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
