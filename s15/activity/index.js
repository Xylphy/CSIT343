console.log("Hello World");
/* 
1. In the s15 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Instructor into your index.js.
*/

//Use your functions in the browser to test your functions

/*
    4. Create function which is able to receive strings and then return an array.
        - function should be able to receive at least 4 arguments.
        - return an array containing the received strings.
*/

function createArray(string1, string2, string3, string4) {
    return [string1, string2, string3, string4];
}

/*
    5. Create function which is able to display the length of a given array.
        - Function should be able to receive an array.
        - Return the length of the array.
*/

function getArrayLength(array) {
    return array.length;
}

/*
    6. Identify and implement the best practices of creating and using arrays by avoiding errors and debugging the following codes. 
        - Log the values of each variable to follow/mimic the output.
*/

let availableGames = [
    "Final Fantasy X",
    "Last of Us",
    "Resident Evil",
    "God of War",
    "Ghost of Tsushima",
];
let activeLocations = ["Manila", "Tokyo", "Washington, D.C.", "Shanghai"];
let employees = ["John", "Dutch", "Arthur", "Hosea"];
let sales = [250, 300, 100, 40, 1300];

/* Don't Modify. Used for Testing */
console.log("These are our available games:");
console.log(availableGames);
console.log("These are our active locations:");
console.log(activeLocations);
console.log("These are our active employees:");
console.log(employees);
console.log("These are our monthly sales:");
console.log(sales);
