console.log("s09/discussion/index.js");

// Function and Parameters
/*
    Syntax:
        function functionName(parameter1, parameter2, parameter3, ...) {
            // code to be executed
        }

        functionName(argument1, argument2, argument3, ...);
*/

function printName(name) {
    console.log("My name is " + name);
}

let sampleVariable = "John Doe";
printName(sampleVariable);

function checkDivisibilityBy8(num) {
    let remainder = num % 8;
    console.log("The remainder of " + num + " divided by 8 is " + remainder);
    let isDivisibleBy8 = remainder === 0;
    console.log("Is " + num + " divisible by 8? ");
    console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
checkDivisibilityBy8(28);
