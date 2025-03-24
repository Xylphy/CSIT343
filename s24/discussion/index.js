console.log("Hello World");

// [SECTION] Arrow Function
// Compact aleternative syntax to traditional functions
// "DRY" - Don't Repeat Yourself

const hello = () => {
    console.log("Hello World");
};

// Function expression
// What is the difference between function declaration and function expression?
// Function declaration can be called before the function is defined
// Function expression can only be called after the function is defined

// exprFunction(); // This will not work

let exprFunction = function () {
    console.log("Hello from the other side");
};

exprFunction(); // This will work

// Arrow Functions with Template Literals

let printFullName = (firstName, middleInitial, lastName) => {
    console.log(`Hello ${firstName} ${middleInitial} ${lastName}`);
};

printFullName("John", "Doe", "Smith");

// Implicit Return Statement
// Arrow functions are able to return values without the use of "return" keyword
// If arrow function return are only written in one line and does not explicit code block with {};

// pre-arrow function without implicit return
let add = (a, b) => {
    return a + b;
};

let total = add(4, 5);
console.log(total);

add = (a, b) => a + b;

let sum = add(2, 2);
console.log(sum);

subtract = (a, b) => a - b;
let difference = subtract(10, 5);
console.log(difference);

// Arrow Functions in Array Methods
// shorten the way to write array methods that require anonymous functions.

let playlist1 = ["Signal", "What is love?", "Can't stop me", "Feel Special"];

playlist1.forEach((song) => {
    console.log(song);
});

let sales = [8900, 2000, 1000, 5000];
let isAllNumbers = sales.every((sale) => typeof sale === "number");

console.log(isAllNumbers);

// [SECTION] Class-based objects blueprints
// Allows create/instantiate objects using classes as blueprints.
// Creating a class blueprint

class Car {
    constructor(brand, name, year) {
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}

// Instantiating an object
const myCar = new Car();
console.log(myCar);

myCar.brand = "Toyota";
myCar.name = "Vios";
myCar.year = 2021;

console.log(myCar);

// Create a new object from car class with initialized values:
const myNewCar = new Car("Toyota", "Vios", 2021);
console.log(myNewCar);
/*

    Mini Activity (10 mins)
 
    1. Create a class named Product with the following:

        - A constructor that accepts name, price, and category.

        - A method getInfo() using an arrow function and implicit return, which returns:
<name> belongs to the <category> with price of Php <price>

    2. A method applyDiscount() that:

        - Accepts a discount percentage.

        - Reduces the price based on the discount and returns the updated price.

    3. Log the following result in the console:

        - getInfo()

        - applyDiscount(10)

    4. Take a screenshot of the console and sent it in the chat
 
    Expected output:
 
    Gaming Laptop belongs to the Electronics category and costs Php 45000.

    Price after discount: Php 40500

*/

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getInfo = () =>
        `${this.name} belongs to the ${this.category} with price of Php ${this.price}`;

    applyDiscount(discount) {
        return this.price - (this.price * discount) / 100;
    }
}

const gamingLaptop = new Product("Gaming Laptop", 45000, "Electronics");
console.log(gamingLaptop.getInfo());
console.log(`Price after discount: Php ${gamingLaptop.applyDiscount(10)}`);

