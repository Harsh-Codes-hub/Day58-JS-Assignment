// 🟪 Day-58 Question Sheet 1

// 🟧 SECTION 1: Objects and OOPS Thinking (Foundation)
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

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

