console.log("Hello World");

// [SECTION] Array Mutators (Sort, Fill, CopyWithin, Reverse)

let fruits = ["Banana", "Apple", "Cherry"];
console.log("Before sort: " + fruits);

// sort() method
// rearrages the array elements in alphanumeric order.

fruits.sort();
console.log("After sort: " + fruits);

// sorting of numbers
let numbers = [10, 2, 30, 4, 90];
console.log("Before sorting number: " + numbers);

// calculates the difference between a and b
// if the result is negative, a is placed before b
// if the result is positive, b is placed before a
// if the result is 0, a and b remain unchanged

numbers.sort((a, b) => a - b);
console.log("After sorting number: " + numbers);

// fill() method
// changes all elements in an array to a static value, from
// a start index (default 0) to an end index (default array.length)

let array = [1, 2, 3, 4, 5];
console.log("Before fill: " + array);
array.fill(0, 1, 4);
console.log("After fill: " + array);

// copyWithin() method
// shalllow copies part of an array to another location in the same array and returns it.

let letters = ["a", "b", "c", "d", "e"];
console.log("Before copyWithin: " + letters);
letters.copyWithin(1, 3);
console.log("After copyWithin: " + letters);

// reverse() method
// reverses the elements in an array in place.

let numbersToReverse = [1, 2, 3, 4, 5]
console.log("Before reverse: " + numbersToReverse);
numbersToReverse.reverse();
console.log("After reverse: " + numbersToReverse);

/*
    Mini Activity (5 mins)

    1. Create an array of guestList: ["Charlie", "Alice", "David", "Bob", "Eve"]. Print the original list.
    2. Arrange the guest names in alphabetical order. Print the updated list.
    3. Rearrange the guest list in reverse alphabetical order. Print the final list.
    4. Take a screenshot of the browser console and send it in the chat.

    Expected Output:

    ["Charlie", "Alice", "David", "Bob", "Eve"]
    ["Alice", "Bob", "Charlie", "David", "Eve"]
    ["Eve", "David", "Charlie", "Bob", "Alice"]  

*/

let guestList = ["Charlie", "Alice", "David", "Bob", "Eve"];
console.log(guestList);
guestList.sort();
console.log(guestList);
guestList.reverse();
console.log(guestList);
