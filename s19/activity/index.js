/* 
    1. In the s19 folder, create an activity folder, an index.html file inside of it and link the index.js file.
    2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
    3. Copy the activity code and instructions from your Instructor into your index.js.
*/

console.log("Hello World");

/*
    Create functions which can manipulate our arrays.
*/
/* 4. Create a function checkIfPartExists to check if an element exists in the array.
    - The function will receive an array of computer parts as an argument
    - Look up the use case of includes() in javascript arrays
    - Use the includes() method to check if a computer component exists in the array.
    - Return a boolean value.
*/
function isPartIncluded(parts, part) {
    return parts.includes(part);
}

/* 5. Create a function combinedCart to combine two arrays which are represented by carts of items before checking out of an online store
    - The function will receive two arrays/carts of items as arguments
    - Use the concat() method to concatenate the two carts
    - Return the combined cart
*/
function combineCart(cart1, cart2) {
    return cart1.concat(cart2);
}

/* 6. Create a function arrayToString to convert an array into string data type
    - The function will receive an array as an argument
    - Look up the use case of toString() in javascript arrays
    - Use the toString() method to convert the array to a string.
    - Return the converted string
*/
function arrayToString(array) {
    return array.toString();
}

/* 7. Create a function joinArrays to combine the array elements into a string, with a separator.
    - Look up the use of join() in javascript arrays
    - Use the join() method to concatenate the array elements into a string, separated by the separator argument
    - Return the converted string
*/
function joinArrays(array, separator) {
    return array.join(separator);
}
