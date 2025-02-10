console.log("Hello World");

// [SECTION] if, else if and else statement

let numG = -1;

// if statement
// Executes a statement if a specified condition is true.
if (numG < 0) {
    console.log("Hello");
}

numG = 0;

if (numG < 0) {
    console.log("Hello");
}

// else if Clause
let numH = 1;

if (numH < 0) {
    console.log("Hello");
} else if (numH > 0) {
    console.log("World");
}

// Else statement
// Executes a statement if the specified condition is false.

if (numH < 0) {
    console.log("Hello");
} else if (numH == 0) {
    console.log("World");
} else {
    console.log("Again");
}

function determineTyphoonIntensity(windSpeed) {
    return windSpeed < 30
        ? "Not a typhoon yet."
        : windSpeed <= 61
        ? "Tropical Depression detected."
        : windSpeed <= 88
        ? "Tropical Storm detected."
        : windSpeed <= 117
        ? "Severe tropical storm detected."
        : "Typhoon detected.";
}

console.log(determineTyphoonIntensity(224));

// console.warn is a good way to print warning in our console that could help developers
// to act on a certain output of the code

let message = determineTyphoonIntensity(90);

if (message == "Severe tropical storm detected.") {
    console.warn(message);
}

if ("false") {
    console.log(true);
} else {
    console.log(false);
}

// [SECTION] Truthy and Falsy
/*
    - a value is considered as true when encountered in a Boolean context.
    - values are considered true unless defined otherwise
    - Falsy values/exceptions for truthy:
        - false
        - 0
        - ""
        - null
        - undefined
        - NaN
*/

// Truthy
if (true) {
    console.log("Truthy");
}

if (1) {
    console.log("Truthy");
}

if ({}) {
    console.log("Truthy");
}

// Falsy
if (false) {
    console.log("Falsy");
}

if (0) {
    console.log("Falsy");
}

if (undefined) {
    console.log("Falsy");
}

// [SECTION] Ternary Operator
/*
    - a conditional operator that assigns a value to a variable based on some condition
    - syntax: condition ? value1 : value2
    - can be used as an alternative to an if-else statement.
    - single statement execution, wherein the result is consist of only one line of code.
    - have an implicit return statement, without the "return keyword"
*/

// Single Statement Execution
let ternaryResult = 1 < 18 ? true : false;
console.log(ternaryResult);

// Multiple Statement Execution
let name;
let age = 19;

function isOfLegalAge() {
    name = "John";
    return "You are of the legal age limit";
}

function isUnderAge() {
    name = "Jane";
    return "You are under the age limit.";
}

let legalAge = age > 18 ? isOfLegalAge() : isUnderAge();
console.log("Result of Ternary Operator: " + legalAge + ", " + name);
