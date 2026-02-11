// 🟪 Day-58 Question Sheet 2

// 🟧 SECTION 1: OOPS Thinking with Objects

// 🟨 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

// 🟢 Solution 1.
let laptop = {
  brand: "ASUS",
  price: "146000",
  start: function () {
    console.log("Laptop started");
  },
};

// 🟨 2. Add one more method to the same object that increases the price by 10 percent.

// 🟢 Solution 2.
// laptop.increasePrice = function() {
//     this.price = this.price * 1.10
// }
// laptop.start()
// console.log(laptop.price);
// laptop.increasePrice();
// console.log(laptop.price);

// 🟨 3. Now imagine you need 10 laptops with same structure but different data. Write down (in words or code) what problems you will face if you keep using plain objects.

// 🟢 Solution 3.
// // The main problem we face it will became hard to manage data and most of time errors can happen easily. And if we keep doing this we cant make it scalable after certain threshold.

// 🟧 SECTION 2: Classes and Objects (Reinforcement)

// 🟨 4. Create a class named Employee that stores:
//    - name
//    - salary
//    - Add a method showDetails that prints name and salary.

// 🟢 Solution 4.
// class Employee {
//   constructor(name = "Unknown", salary = "Unknown") {
//     ((this.name = name), (this.salary = salary));
//   }
//   showDetails() {
//     console.log(`Name: ${this.name} | Salary: ${this.salary}`);
//   }
// }

// 🟨 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others.

// 🟢 Solution 5.
// let emp1 = new Employee("Harsh", 800000);
// emp1.showDetails();
// let emp2 = new Employee("Frag", 1500000);
// emp2.showDetails();
// let emp3 = new Employee("Fuji", 1100000);
// emp3.showDetails();

// emp1.salary = 2000000;
// emp1.showDetails();
// emp2.showDetails();
// emp3.showDetails();

// 🟨 6. Explain in your own words:
//    - Why is class considered a better option than writing similar objects again and again?

// 🟢 Solution 6.
// // In simple words it cuts out the code clutter and makes the code reusability easier and efficient. We just need to write structure one time and can use it infinite times without writing structure again and again.

// 🟧 SECTION 3: Constructor and Initialization

// 🟨 7. Create a class named BankAccount. Its constructor should accept accountHolderName and balance.

// 🟨 8. Inside the constructor, store both values using this.

// 🟨 9. Add a method deposit(amount) that increases the balance.

// 🟨 10. Create two bank accounts and deposit money into only one. Observe and explain why the second account is not affected.

// 🟢 Solution 7, 8, 9, 10.
class BankAccount {
  constructor(accountHolderName = "Unknown", balance = "Unknown") {
    ((this.accountHolderName = accountHolderName), (this.balance = balance));
  }
  deposit(amount) {
    let oldBalance = this.balance;
    this.balance += amount;
    console.log(`Balance updated from ${oldBalance} to ${this.balance}`);
  }
}

let account1 = new BankAccount("Harsh", 1000000);
let account2 = new BankAccount("Frag", 1000000);
account1.deposit(200000);
console.log(account2.balance);
// // Account 2 balance is not effected because value is changed of account 1 not 2 and this defines what object to use. If we use method for account 1 it changes account 1 properties values not the account 2/

// 🟧 SECTION 4: Understanding this (Very Important)

// 🟧 SECTION 5: Constructor Function and Prototype

// 🟧 SECTION 6: call Method Practice

// 🟧 SECTION 7: apply Method Practice

// 🟧 SECTION 8: bind Method Practice
