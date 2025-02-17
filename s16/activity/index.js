/* 
1. In the s16 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/

console.log("Hello World");

//Given array can be used for testing.
let groceryList = [
    "Tomato Sauce",
    "Spaghetti Noodles",
    "Onion",
    "Cheese",
    "Hotdog",
    "Fruit Cocktail",
    "All Purpose Cream",
];

console.log("Items to buy: ");
console.log(groceryList);


/*
    4. Create function which is able to receive an array and the index number of the item to be found, then return the found item.
        - function should be able to receive an array and the index of the item to be found.
        - return the item accessed by the index.
        - if the item cannot be found, return undefined.
*/

function getItemByIndex(array, index) {
    return array[index];
}

/*
    5. Create function which is able to update a specific item in the given array by its index.
        - Function should be able to receive 3 arguments, the array, the update value and the index number.
        - Access and locate the item by its index then re-assign the item with the update.
        - Return the updated array.
*/

function updateItemByIndex(array, value, index) {
    array[index] = value;
    return array;
}

/*

    6. Create a function able to verify if all elements in an array are even numbers.
        - The function should take an array as its input.
        - Inside the function, set up a loop to go through each element in the array.
        - within the loop add an if statement to check if the current item being looped is an even number.
            - If the current item looped is NOT an even number, return false
        - After the loop (outside of it), return true, indicating that all elements in the array are even numbers.
*/

function checkIfAllEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

/* 

    7. Debug the given code to allow the functions to properly receive and return the correct values and mimic the output.
        - Check the syntax of the given code.
        - Check if proper value is returned or displayed.
        - Check the parameters and arguments.
        - Check the if else statements
        - Check the if conditions
        - Check the loop statements
        - Check the loop conditions
        - Check the array access
    - Use the browser console to test your functions.
*/

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
