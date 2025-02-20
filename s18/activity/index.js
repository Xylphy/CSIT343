/* 
1. In the S18 folder, create an activity folder and an index.html and index.js file inside of it.
    - Create an index.html file to attach our index.js file
    - Copy the template provided by your Instructor and paste it in an index.js file.
    - Update your local sessions git repository and push to git with the commit message of Add template code s18.
    - Console log the message Hello World to ensure that the script file is properly associated with the html file.


*/

/*
    
    You are a treasure hunter and need to organize your treasure map and loot using array mutator methods. Use all the methods (sort(), fill(), copyWithin(), and reverse()) to solve the following tasks:

    2. Start with the array of loot: ["gold", "silver", "bronze", "emerald", "diamond"].

    3. Sort the loot alphabetically.

    4. Reverse the order of the loot.

    5. Copy the last two treasures to the beginning of the array.

    6. Fill the last three positions with "unknown".

    7. Log the final state of the loot array.
*/

let loot = ["gold", "silver", "bronze", "emerald", "diamond"];
loot.sort();
console.log("Sorted loot: ");
console.log(loot);
loot.reverse();
console.log("Reversed loot: ");
console.log(loot);
loot.copyWithin(0, 3);
console.log("Copied treasures: ");
console.log(loot);
loot.fill("unknown", 2);
console.log("Final loot: ");
console.log(loot);

/* 

    8. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

    - Check syntax of the following code.
    - Check if value is returned.
    - Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
    - Check if the array methods used are correct.

*/

let numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];

function returnEvenNumbers(arr) {
    if (arr.length === 0) {
        return "The array is empty.";
    }

    let isAllNumbers = arr.every((num) => typeof num === "number");

    if (isAllNumbers === false) {
        return "The array does not contain all numbers.";
    }

    let isAllPositiveIntegers = arr.some((num) => num < 0);

    if (isAllPositiveIntegers === true) {
        return "The array does not contain all positive integers.";
    }

    return arr.filter((num) => num % 2 === 0);
}

let messageIfEmptyArr = returnEvenNumbers([]);
console.log("Message if the array is empty:");
console.log(messageIfEmptyArr);

let messageIfNotAllNumbers = returnEvenNumbers([1, 2, 3, "25", 4]);
console.log("Message if the array does not contain all number data type:");
console.log(messageIfNotAllNumbers);

let messageIfNotAllPositiveIntegers = returnEvenNumbers([1, 2, 3, -25, 4]);
console.log("Message if the array does not contain all positive integers:");
console.log(messageIfNotAllPositiveIntegers);

let evenNumbers = returnEvenNumbers(numbers);
console.log("Even numbers in the array:");
console.log(evenNumbers);

function findIndex(arr, num) {
    if (!Array.isArray(arr)) {
        return "Error: First argument must be an array";
    }

    if (typeof num !== "number") {
        return "Error: Second argument must be a number";
    }

    return arr.findIndex((number) => number === num);
}

let messageIfFirstArgumentNotArray = findIndex(
    { element1: 1, element2: 2, element3: 3 },
    3
);
console.log(messageIfFirstArgumentNotArray);

let messageIfSecondArgumentNotNumber = findIndex(numbers, "3");
console.log(messageIfSecondArgumentNotNumber);

let index = findIndex(numbers, 3);
console.log(index);
