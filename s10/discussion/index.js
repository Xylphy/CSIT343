// Multiple Parameters
// - In JS, providing more/less arguments than the expected parameters will not result in an error.
// - If you provide more arguments than the expected parameters, the extra arguments will be ignored.
// - If you provide less arguments than the expected parameters, the missing parameters will be
//  assigned with the value of undefined.

function createFullName(firstName, middleName, lastName) {
    console.log(firstName + " " + middleName + " " + lastName);
}

createFullName("Juan", "Dela", "Cruz"); // Juan Dela Cruz
createFullName("Juan", "Dela"); // Juan Dela undefined
createFullName("Juan", "Dela", "Cruz", "Santos"); // Juan Dela Cruz

// Using variables as arguments
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName); // John Doe Smith

function printFullName(middleName, firstName, lastName) {
    console.log(firstName + " " + middleName + " " + lastName);
}

printFullName("Juan", "Dela", "Cruz"); // Dela Juan Cruz
