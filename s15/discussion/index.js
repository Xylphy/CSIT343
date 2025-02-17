console.log("Hello World");

// List all the graduating students from a class
let studentNumberA = "2020-1923";
let studentNumberB = "2020-1924";
let studentNumberC = "2020-1925";
let studentNumberD = "2020-1926";
let studentNumberE = "2020-1927";

// array
let studentNumbers = [
    "2020-1923",
    "2020-1924",
    "2020-1925",
    "2020-1926",
    "2020-1927",
];

// [SECTION] Array
// used to store multiple related values into a single variable
// declared using square brackets ([]) are also known as array literals
// Arrays also provides a number of methods for further manipulation.

let grades = [90, 80, 70, 60, 50];
let computerBrands = ["Acers", "Asus", "Dell", "HP", "Lenovo"];

// this will work
let mixedArray = [12, "Asus", null, undefined, {}]; // this is not recommended

console.log(grades);
console.log(mixedArray);

// Write an array in separate line for redability
let myTasks = ["drink html", "eat javascript", "inhale CSS", "bake SASS"];

console.log(myTasks);

// Create an array with values from variables
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];
console.log(cities);

let array = [];
array[3] = "Hello";
console.log(array);
console.log(array.length); // 4

// [SECTION] Array .length property
// .length property allaws us to get and set the total number of items in an array

let blankArr = [];
console.log(blankArr.length); // 0

/*

    Mini Activity: (5 mins)

    1. Create a fruit array with the elements: ["apple", "banana", "cherry"].
    2. Print the initial value of the fruit array.
    3. Remove the last element of fruit array.
    4. Print the updated fruit array and its length.
    5. Take a screenshot of the browser console and send it in the chat.

    Expected output:
    Initial Fruit Array: apple,banana,cherry
    Initial Fruit Array Length: 3
    Updated Fruit Array: apple,banana
    Updated Fruit Array Length: 2
*/

let fruits = ["apple", "banana", "cherry"];
console.log("Initial Fruit Array:", fruits);
console.log("Initial Fruit Array Length:", fruits.length);
fruits.length--;
console.log("Updated Fruit Array:", fruits);
console.log("Updated Fruit Array Length:", fruits.length);

function displayLength(array){
    console.log(array.length);
}

displayLength(myTasks);
displayLength(["Jeff", "Jill", "Jack"]);