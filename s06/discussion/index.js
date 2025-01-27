console.log("Hello World");

// [SECTION] JS Type Coercion
// automatically converts one data type to another

let numA = "10";
let numB = 12;

// Add string and a number will result as a string.
let coercion = numA + numB;
console.log(coercion); // 1012
console.log(typeof coercion); // string

// Multiply string and a number will result as a number.
coercion = numA * numB;
console.log(coercion); // 120
console.log(typeof coercion); // number

// Add boolean and a number will result as a number.
let coercionTrue = true + 1;
console.log(coercionTrue); // 2
console.log(typeof coercionTrue); // number

let coercionFalse = false + 1;
console.log(coercionFalse); // 1
console.log(typeof coercionFalse); // number

// [SECTION] Comparison operators (==, ===, !=, !==, >, <, >=, <=)
// Comparison operators are used to compare two values.

// Arrays (and objects) are compared by reference (memory address), not by value.
let coercionObj = [] == [];
console.log(coercionObj); // false

// Strict equality (===) compares both value and type.
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === "1");
console.log(0 === false);

// String Inequality Operator (!==)
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== "1");
console.log(0 !== false);

let a = 50;
let b = 65;

// Greater than operator
let isGreaterThan = a > b;

// Less than operator
let isLessThan = a < b;

// Greater than or equal to operator
let isGreaterThanOrEqual = a >= b;

// Less than or equal to operator
let isLessThanOrEqual = a <= b;

console.log(isGreaterThan); // false
console.log(isLessThan); // true
console.log(isGreaterThanOrEqual); // false
console.log(isLessThanOrEqual); // true

// converts string to number before comparison - type coercion
let numStr = "50";
console.log(a >= numStr); // true
console.log(b <= numStr); // false

// Since the string is not numeric, it will be converted to a number
// and it will result to NaN. Any comparison with NaN will result to false.
let str = "twenty";
console.log(b >= str); // false


// [SECTION] Logical operators (&&, ||, !)

let isLegalAge = true;
let isRegistered = false;

// Logical AND operator (&&)
// returns true if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirementsMet); // false

// Logical OR operator (||)
// returns true if at least one operand is true
let anyRequirementMet = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " + anyRequirementMet); // true

// Logical NOT operator (!)
// returns true if the operand is false and vice versa
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT operator: " + someRequirementsNotMet); // true
