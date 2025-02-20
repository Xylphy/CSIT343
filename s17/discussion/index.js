console.log("Hello World");

// [SECTION] Array Manipulation with Array Methods
// Built-in functions and methods for arrays, wherein it will allow us to manipulate and access
// the array elements.
// Three kinds of array methods:
// 1. Non-mutators allows us to manage and perform tasks on an array without changing the
// contents of the original array.
// 2. Iterator methods allow us to loop over elements/items in an array and perform task with them.
// 3. Mutator methods allow us to change the contents of the original array.

// [SECTION] Mutator Methods
// Adding and removing elements from an array.

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log("Current Array");
console.log(fruits);
console.log(fruits.length);

// push()
// Adds an element in the end of the array and returns the new length of the array.
let fruitsLength = fruits.push("Mango");
console.log("Push method return: " + fruitsLength);
console.log("Mutated array from push method");
console.log(fruits);
console.log(fruits.length);

// add multiple elements to an array
fruits.push("Avocado", "Guava");
console.log("Mutated array from push method");
console.log(fruits);
console.log(fruits.length);

function addFruit(fruit) {
    fruits.push(fruit);
}

addFruit("Pineapple");
console.log("Mutated array from push method");
console.log(fruits);
console.log(fruits.length);

// pop()
// Removes the last element from the array and returns the removed element.
let removedFruit = fruits.pop();
console.log("Removed fruit: " + removedFruit);
console.log("Mutated array from pop method");
console.log(fruits);
console.log(fruits.length);

function removeFruit() {
    return fruits.pop();
}

removeFruit();
console.log("Mutated array from pop method");
console.log(fruits);
console.log(fruits.length);

// splice()
// Sumultaneously removes and element from a specified index number and adds elements to the array
// Syntax: arrayName.splice(startingIndex, deleteCount, elementsToBeAdded);

let splicedFruits = fruits.splice(1, 2, "Lime", "Cherry");
console.log(splicedFruits);
console.log("Mutated array from splice method");
console.log(fruits);

function spliceFruits(index, deleteCount, fruit) {
    fruits.splice(index, deleteCount, fruit);
}

spliceFruits(1, 1, "Avocado");
spliceFruits(2, 1, "Durian");
console.log("Mutated array from splice method");
console.log(fruits);

