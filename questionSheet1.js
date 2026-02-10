// 🟪 Day-58 Question Sheet 1

// 🟧 SECTION 1: Objects and OOPS Thinking (Foundation)

// 🟨 1. Create a user object that stores name and email and has a login method which prints “User logged in”.

// 🟢 Solution 1.
// let user = {
//   name: "user",
//   email: "user@user.user",
//   login: function() {
//     console.log("User logged in");
//   },
// };
// user.login();

// 🟨 2. Imagine you now have 5 users.
//    - First, think how you would manage them without using a class.
//    - Then convert the same logic using a class and observe how the code becomes cleaner.
//    - Write code for both approaches.

// 🟢 Solution 2. (without class)
// let user1 = {
//     name : "user",
//     email: "user@user.user"
//     login: () => { console.log("User logged in"); }
// }
// let user2 = {
//     name : "user",
//     email: "user@user.user"
//     login: () => { console.log("User logged in"); }
// }
// let user3 = {
//     name : "user",
//     email: "user@user.user"
//     login: () => { console.log("User logged in"); }
// }
// let user4 = {
//     name : "user",
//     email: "user@user.user"
//     login: () => { console.log("User logged in"); }
// }
// let user5 = {
//     name : "user",
//     email: "user@user.user"
//     login: () => { console.log("User logged in"); }
// }

// 🟢 Solution 2. (with class)
// class User {
//   constructor(name = "guest", email = "") {
//     ((this.name = name), (this.email = email));
//   }
//   login() {
//     console.log("User logged in");
//   }
// }
// let user1 = new User("User", "user@user.user");
// let user2 = new User("User", "user@user.user");
// let user3 = new User("User", "user@user.user");
// let user4 = new User("User", "user@user.user");
// let user5 = new User("User", "user@user.user");

// 🟨 3. Create a product object that stores name and price and has a method which returns the final price after discount.

// 🟢 Solution 3.
// let product = {
//     name: "cap",
//     price: 1200,
//     discountedPrice: function() {
//         return this.price - 200;
//     }
// }
// console.log(product.discountedPrice());

// 🟧 SECTION 2: Classes and Objects

// 🟨 4. Create a Car class with the following:
//    - brand
//    - speed
//    - a drive method that prints the car brand and speed

// 🟢 Solution 4.
// class Car {
//   constructor(brand = "Unknown", speed = "Unknown") {
//     ((this.brand = brand), (this.speed = speed));
//   }
//   drive() {
//     console.log(`Brand: ${this.brand} | Speed: ${this.speed}`);
//   }
// }

// 🟨 5. Create two different car objects from the same class and verify that their data is different.

// 🟢 Solution 5.
// let car1 = new Car("Nano", 100);
// console.log(car1);
// car1.drive();
// let car2 = new Car("Alto800", 80);
// console.log(car2);
// car2.drive();

// 🟨 6. Answer this in your own words:
//    - If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// 🟢 Solution 6.
// // If classes did not exist, we had to use so objects to store millions of users or a product data with manual creation. If projects became large then it would be so tedious to scale code and it would have so much time then average.

// 🟧 SECTION 3: Constructor and this keyword

// 🟨 7. Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.

// 🟢 Solution 7.
// class Student {
//   constructor(name = "Unknown", rollNo = "Unknown") {
//     ((this.name = name), (this.rollNo = rollNo));
//   }
//   printInfo() {
//     console.log(`Name: ${this.name}| Roll No.: ${this.rollNo}`);
//   }
// }

// 🟨 8. Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.

// 🟢 Solution 8. (with this)
// class Student {
//   constructor(name = "Unknown", rollNo = "Unknown") {
//     ((this.name = name), (this.rollNo = rollNo));
//   }
//   printInfo() {
//     console.log(`Name: ${this.name} | Roll No.: ${this.rollNo}`);
//   }
// }
// let student1 = new Student("Harsh", 7256);
// student1.printInfo();

// 🟢 Solution 8. (without this)
// class Student {
//   constructor(name = "Unknown", rollNo = "Unknown") {
//     ((name = name), (rollNo = rollNo));
//   }
//   printInfo() {
//     console.log(`Name: ${this.name} | Roll No.: ${this.rollNo}`);
//   }
// }
// let student1 = new Student("Harsh", 7256);
// student1.printInfo();

// 🟨 9. Create an object with two methods:
//    * One method using a normal function
//    * One method using an arrow function
//    * Inside both, print this and observe the difference.

// 🟢 Solution 9.
// let obj = {
//   normalFunction: function () {
//     console.log(this);
//   },
//   arrowFunction: () => {
//     console.log(this);
//   },
// };
// obj.normalFunction();
// obj.arrowFunction();

// 🟧 SECTION 4: Constructor Functions and Prototypes

// 🟨 10. Create a User constructor function (do not use class syntax).

// 🟢 Solution 10.
// function User(name = "Unknown", email = "Unknown") {
//     this.name = name,
//     this.email = email
// }
// let user1 = new User("Harsh", "harsh@harsh.harsh")
// console.log(user1);

// 🟨 11. Add a login method in two ways:
//    * First, inside the constructor
//    * Then, move the method to the prototype

// 🟢 Solution 11. (login function in constructor)
// class createPrivateUser {
//   constructor(name = "Unknown", email = "Unknown") {
//     (((this.name = name), (this.email = email)),
//       (this.login = function () {
//         console.log("Logged in!");
//       }));
//   }
// }

// 🟢 Solution 11. (login function in prototype)
// class CreatePublicUser {
//   constructor(name = "Unknown", email = "Unknown") {
//     ((this.name = name), (this.email = email));
//   }
//   login() {
//     console.log("Logged in!");
//   }
// }

// 🟨 12. Create two User objects and compare their login methods using equality. Explain why the result is true or false.

// 🟢 Solution 12. (function in constructor)
// let user1 = new createPrivateUser("Harsh", "harsh@harsh.harsh")
// let user2 = new createPrivateUser("frag", "frag@frag.frag")
// console.log(user1.login === user2.login);
// // It will give output as false because constructor makes each function unique for every new object created by its respective class.

// 🟢 Solution 12. (function in prototype)
// let userA = new CreatePublicUser("Harsh", "harsh@harsh.harsh")
// let userB = new CreatePublicUser("frag", "frag@frag.frag")
// console.log(userA.login === userB.login);
// // It will give output as true because prototype makes the function shareable to all objects created by its respective class.

// 🟧 SECTION 5: call, apply, bind

// 🟨 13. Create a function that prints this.name.

// 🟢 Solution 13.
// function print(a, b, c) {
//   console.log(this.name, a, b, c);
// }
// print();

// 🟨 14. Create an object that contains a name property.
//    * Use call to run the function using the object
//    * Use apply to run the function using the object
//    * Use bind to create a new function and then call it

// 🟢 Solution 14.
// let obj = {
//   name: "objName",
// };
// print.call(obj);
// print.apply(obj, [1, 2, 3]);
// let printBind = print.bind(obj, 1, 2, 3);
// printBind();

// 🟨 15. Borrow a method from one object and run it for another object using call.

// 🟢 Solution 15.
// let obj1 = {
//   objName: "obj1",
//   print: function () {
//     console.log(this.objName);
//   },
// };

// let obj2 = {
//   objName: "obj2",
// };

// obj1.print.call(obj2);