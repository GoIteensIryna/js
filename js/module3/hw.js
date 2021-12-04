// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function (arr, prop) {
//   const finalArr = [];
//   for (let item of arr) {
//     for (let element in item) {
//       if (element === prop) {
//         finalArr.push(item[element]);
//       }
//     }
//   }
//   return finalArr;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []


// =========================================================

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length+1,
      amount,
      type
    }
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item.id === id) {
        return item
      }
    }

  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0
    for (let item of this.transactions) {
      if (item.type === type) {
        sum +=1
      }
    }
    return sum;
  },

};
account.deposit(700);
account.withdraw(200);
account.deposit(400);
account.withdraw(300);
account.withdraw(100);
account.deposit(200);
account.withdraw(500);
account.deposit(100);
account.deposit(800);
console.log(account.getBalance())
// console.log(account.getBalance())
// console.log(account.transactions)


// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const { DEPOSIT, WITHDRAW } = Transaction;


// const account = {
//   balance: 0,
//   id: 0,
//   getBalance() {
//     return this.balance;
//   },
//   transactions: [],
//   getTransactions(amount, type) {
//      const trans = {
//       id: this.id,
//       amount,
//       type,
//     }
//     this.transactions.push(trans)
//   },
//   getDeposit(amount) {
//     this.id += 1;
//     this.balance += amount;
//     this.getTransactions(amount, DEPOSIT)
//   },
//   getWithdraw(amount) {
//     if (this.balance >= amount) {
//       this.id += 1;
//       this.balance -= amount;
//       this.getTransactions(amount, WITHDRAW)
//     } else {
//       alert('Ooops no money')
//     }
//   },
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].id === id) {
//         console.log(this.transactions[i]);
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let transactionTotal = 0;
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].type === type) {
//         transactionTotal += this.transactions[i].amount;
//       }
//     }
//     return transactionTotal;
//    },

// };


// console.log(account.getWithdraw(20000));

// console.log(account.getDeposit(500));
// console.log(account.getDeposit(800));
// console.log(account.getWithdraw(150));

// console.log(account.transactions);
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal('withdraw'));
// console.log(account.getBalance());
