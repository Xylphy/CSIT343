console.log("s08/discussion/index.js");

// [SECTION] Understanding Scope in JavaScript
// Scope determines the accessibility (visibility) of variables in JavaScript.

// Types of scope in JavaScript:
// 1. Global Scope
// Accessible from anywhere in the code.

const globalVariable = "I'm a global variable";

function displayGlobal() {
    console.log(globalVariable);
}

displayGlobal();
console.log(globalVariable);

// 2. Local Scope

// Function Scope

function localFunction() {
    const localVariable = "I'm a local variable";
    console.log(localVariable);
}

localFunction();
// console.log(localVariable); // ReferenceError: localVariable is not defined

// Block Scope ({} - if, for, while, etc.)
// Variables declared with let or const inside these blocks are scoped to that specific block.
{
    const blockVariable = "I'm a block variable";
    console.log(blockVariable);
}

// console.log(blockVariable); // ReferenceError: blockVariable is not defined

// [SECTION] Return Statement
// Allow us to output a value from a function to be passed to the line/block of code
// that called the function.

// Return Statement
function returnFullName() {
    let fullName = "John" + " " + "Doe" + " " + "Smith";
    return fullName;
    console.log("This line will not be executed");
}

let fullName = returnFullName();
console.log(fullName);
console.log(returnFullName());

// [SECTION] console.log vs return statements

function returnFullAddress() {
    let fullAddress = {
        street: "#44 Maharlika St.",
        city: "Tarlac City",
        province: "Tarlac",
    };

    return fullAddress;
}

let myAddress = returnFullAddress();
console.log(myAddress);

function printPlayerInfo() {
    console.log("Username: " + "White_knight");
    console.log("Level: " + 99);
    console.log("Job: " + "Paladin");
}

// returns undefined because the printPlayerInfo() function does not return anything
// It only displays the details in the console.
let user1 = printPlayerInfo();
console.log(user1);


// You can return almost any data types from a function.

function returnSumOfNumbers() {
    return 5 + 10;
}

let sumOf5and10 = returnSumOfNumbers();
console.log(sumOf5and10);

let total = 100 + returnSumOfNumbers();
console.log(total); // 115

// Simulates getting an array of user names from database
function getGuildMembers() {
    return ["White_knight", "Black_knight", "Red_knight"];
}

console.log(getGuildMembers());
