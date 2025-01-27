console.log("Hello World");

// [SECTION] Arithmetic Operators
let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Sum: " + sum);

let difference = x - y;
console.log("Difference: " + difference);

let product = x * y;
console.log("Product: " + product);

let quotient = x / y;
console.log("Quotient: " + quotient);

// [SECTION] Assignment Operator [=]

// Asssignment operators assigns the value of right operand
//  to a variable.
let assignmentNumber = 8;

// Addition Assignment Operator [+=]
// Adds the value of right operand to the value of left operand
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Subtraction Assignment Operator [-=]
// Subtracts the value of right operand from the value of left operand
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

// [SECTION] Increment and Decrement Operators (++ and --)
// Operators that add or subtract values by 1 from their operands.
let z = 1;

// Pre-increment: Increments the value of the operand by 1 before using it.
let increment = ++z;
console.log("Result of pre-increment operator: " + increment);
console.log(z);

// Post-increment: Increments the value of the operand by 1 after using it.
increment = z++;
console.log("Result of post-increment operator: " + increment);
console.log(z);

// Pre-decrement: Decrements the value of the operand by 1 before using it.
let decrement = --z;
console.log("Result of pre-decrement operator: " + decrement);
console.log(z);

// Post-decrement: Decrements the value of the operand by 1 after using it.
decrement = z--;
console.log("Result of post-decrement operator: " + decrement);
console.log(z);