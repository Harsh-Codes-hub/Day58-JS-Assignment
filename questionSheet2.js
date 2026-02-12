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
// class BankAccount {
//   constructor(accountHolderName = "Unknown", balance = "Unknown") {
//     ((this.accountHolderName = accountHolderName), (this.balance = balance));
//   }
//   deposit(amount) {
//     let oldBalance = this.balance;
//     this.balance += amount;
//     console.log(`Balance updated from ${oldBalance} to ${this.balance}`);
//   }
// }

// let account1 = new BankAccount("Harsh", 1000000);
// let account2 = new BankAccount("Frag", 1000000);
// account1.deposit(200000);
// console.log(account2.balance);
// // Account 2 balance is not effected because value is changed of account 1 not 2 and this defines what object to use. If we use method for account 1 it changes account 1 properties values not the account 2/

// 🟧 SECTION 4: Understanding this (Very Important)

// 🟨 11. Create an object named profile with a property username and a method printName that logs this.username.

// 🟢 Solution 11.
// let profile = {
//   username: "Harsh",
//   printname: function () {
//     console.log(this.username);
//   },
// };

// 🟨 12. Call the method normally and observe the output.

// 🟢 Solution 12.
// profile.printname();

// 🟨 13. Store the method in a separate variable and call it. Observe what happens to this and explain why.

// 🟢 Solution 13.
// let testFunction = profile.printname;
// testFunction();

// 🟨 14. Modify the code so that this works correctly again.

// 🟢 Solution 14.
// testFunction.call(profile);
// testFunction.apply(profile);
// testFunction = () => profile.printname();
// testFunction();
// testFunction = profile.printname.bind(profile);
// testFunction();

// 🟧 SECTION 5: Constructor Function and Prototype

// 🟨 15. Create a constructor function called Vehicle that accepts type and wheels.

// 🟢 Solution 15.
// function Vehicle(type, wheels) {
//   ((this.type = type), (this.wheels = wheels));
// }

// 🟨 16. Add a method describe inside the constructor and observe memory behavior when multiple objects are created.

// 🟢 Solution 16.
// function Vehicle(type, wheels) {
//   (((this.type = type), (this.wheels = wheels)),
//     (this.describe = function () {
//       return `Vehicle type: ${this.type} | No. of Wheels: ${this.wheels}`;
//     }));
// }
// let car = new Vehicle("Car", 4);
// let bike = new Vehicle("Bike", 2);

// console.log(car.describe());
// console.log(bike.describe());

// console.log(car.describe === bike.describe);

// 🟨 17. Move the same method to Vehicle.prototype and repeat the test.

// 🟢 Solution 17.
// function Vehicle(type, wheels) {
//   ((this.type = type), (this.wheels = wheels));
// }

// Vehicle.prototype.describe = function () {
//   return `Vehicle type: ${this.type} | No. of Wheels: ${this.wheels}`;
// };
// let car = new Vehicle("Car", 4);
// let bike = new Vehicle("Bike", 2);

// console.log(car.describe());
// console.log(bike.describe());

// console.log(car.describe === bike.describe);

// 🟨 18. Explain why the prototype approach is preferred.

// 🟢 Solution 18.
// // Its memory efficient because its shared in all created objects, Increases Performance.

// 🟧 SECTION 6: call Method Practice

// 🟨 19. Create a function showBrand that prints this.brand.

// 🟢 Solution 19.
function showBrand() {
  console.log(this.brand);
}

// 🟨 20. Create two different objects with brand values.

// 🟢 Solution 20.
let brand1 = {
  brand: "NIKE",
};

let brand2 = {
  brand: "ADIDAS",
};

// 🟨 21. Use call to execute showBrand for both objects.

// 🟢 Solution 21.
showBrand.call(brand1);
showBrand.call(brand2);

// 🟨 22. Explain what problem call is solving here.

// 🟢 Solution
// // call() lets us manually set what this should be when the function runs.

// 🟧 SECTION 7: apply Method Practice

// 🟨 23. Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.

// 🟢 Solution 23.
// function introduce(city, role) {
//   return `City: ${city} | Role: ${role} | Name: ${this.name}`;
// }

// 🟨 24. Create an object with a name property.

// 🟢 Solution 24.
// let person = {
//   name: "Harsh",
// };

// 🟨 25. Use apply to call introduce using the object and an array of arguments.

// 🟢 Solution 25.
// console.log(introduce.apply(person, ["Chittorgarh", "Front-End Dev"]));

// 🟨 26. Explain in simple words how apply differs from call.

// 🟢 Solution
// // In apply we pass rest arguments as array after passing object variable. In call we pass variables one by one after passing object variable.

// 🟧 SECTION 8: bind Method Practice

// 🟨 27. Create a function greet that prints “Hello” followed by this.name.

// 🟢 Solution 27.
// function greet() {
//   console.log(`Hello, ${this.name}`);
// }

// 🟨 28. Bind this function to an object and store the returned function in a variable.

// 🟢 Solution 28.
// let user = {
//   name: "Frag",
// }

// let greetMe = greet.bind(user)

// 🟨 29. Call the bound function later and observe the output.

// 🟢 Solution 29.
// greetMe()

// 🟨 30. Explain why bind is useful when functions are executed later or inside callbacks.

// 🟢 Solution
// // It sets this value permanently to newly created variable (function) and it can later be used when we want.