console.log("Hello World");

// [SECTION] Non-mutator methods
// are functions that do not modify or change an array after they are called.

// indexOf()
// returns the index number of the first occurrence of a value in an array.
// if the value is not found, it returns -1.

let countries = ["US", "PH", "SG", "CAN", "TH", "PH", "FR", "DE"];
console.log(countries.indexOf("PH")); // 1
console.log(countries.indexOf("Not a country")); // -1

// slice()
// Portion/slice elements from an array and returns a new array.
// Slicing off elements from the specified index up to the last index.
console.log(countries.slice(-3));

// concat()
// Combines two arrays and returns a new array.

let taskArrayA = ["Task 1", "Task 2", "Task 3"];
let taskArrayB = ["Task 4", "Task 5", "Task 6"];
let taskArrayC = ["Task 7", "Task 8", "Task 9"];

let tasks = taskArrayA.concat(taskArrayB);
console.log("Result of concat(): ", tasks);

let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log("Result of concat() with multiple arrays: ", allTasks);

// combine arrays with elements.
let combinedTasks = taskArrayA.concat("Task 4", "Task 5", "Task 6");
console.log("Result of concat() with elements: ", combinedTasks);

// includes()
// Checks if an array contains a specific value.
// returns true of item/s is/are found, otherwise false.

let carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
let isExisting1 = carBrands.includes("Toyota");
let isExisting2 = carBrands.includes("Mitsubishi");

console.log("Is Toyota existing? ", isExisting1);
console.log("Is Mitsubishi existing? ", isExisting2);

/*

    Mini Activity (5 mins)
    1. Create an array named guestList with the names: ["Alice", "Bob", "Charlie", "David", "Eve"].
    2. Check if "Charlie" is in the guest list and print the result.
    3. Find and print the index of "David".
    4. Create a new array containing only the first and last guests, then print the result.
    5. Take a screenshot of the console output and send it in the chat.

    Expected output:
    Guest list: Alice,Bob,Charlie,David,Eve
    Is Charlie on the list? true
    David index number is: 3
    First and last guests: Alice,Eve
*/

let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Guest list: " + guestList);
console.log("Is Charlie on the list? ", guestList.includes("Charlie"));
console.log("David index number is: ", guestList.indexOf("David"));

// Method chaining
console.log(
    "First and last guests: " +
        guestList.slice(0, 1).concat(guestList.slice(-1))
);
