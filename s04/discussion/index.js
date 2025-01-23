console.log("Hello World");

// Best practices in naming

let movieTitle = "The God Father";
let x = "aiah";

let LastName = "Smith"; //bad variable name - PascalCase

// PascalCase - used for naming classes, constructors, and methods
let lastName = "Smith"; //good variable name - camelCase

/* Do not add spaces to your variable names. Use specific naming
convention like camcelCase or snake_case or kebab-case
let last name = "Smith"; //bad variable name - space */

let firstName = "John";
console.log(firstName);

let email_address = "mikesmith@gmail.com";
console.log(email_address);

/* Avoid using a variable witha reserved keyword.
let new = "New Addition"; //bad variable name - reserved keyword
console.log(new); */

// Using the "=" operator to assign a value to a variable
let productName = "desktop computer";
productName = "laptop computer";
console.log(productName);

// This allow us to declare a variable without assigning a value
// then assign a value later
let productPrice;
productPrice = 1000;
console.log(productPrice);

// const - used to declare a constant variable meaning it cannot
// be changed

const PI = 3.14159;
// PI = 3.14; //error - cannot reassign a constant variable
console.log(PI);

// Data Types
let myString = "";
let province = "Ontario";
let country = "Canada";

console.log(province);
console.log(country);

// Numbers - integers and floating point numbers
let myNumber = 27;
let price = 9.99;

console.log(myNumber);
console.log(price);

// Boolean - true or false
let isLogged = true;
let isHidden = false;

console.log(isLogged);
console.log(isHidden);

// null
// intentionally empty value
let spouse = null;
console.log(spouse);

// undefined
// declared but not assigned a value
let myVar;
console.log(myVar);

// Arrays
// Special type of data - stores collection of values and each value
// in array is associated with a numberic index.
// Can store different data types but is normally used to store
// similar data types.

// Not recommended
let person = ["John", 27, true, "Toronto"];
console.log(person);

// Similar data types
let grades = [90, 85, 95, 88, 92];
console.log(grades);

// Objects
// Used to mimic real-world objects.
// Consists of key-value pairs. Values can be any data type.

let personObj = {
    firstName: "John",
    age: 27,
    isStudent: true,
    city: "Toronto",
    contact: ["+639123456789", "83123456789"],
    address: {
        houseNumber: 123,
        city: "Toronto",
    }
};

console.log(personObj);


// useful for creating abstract objects
let myGrades = {
    firstGrading: 98.7,
    secondGrading: 95.5,
    thirdGrading: 92.5,
    fourthGrading: 89.5
}

console.log(myGrades);

