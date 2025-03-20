// console.log("Hello World");

/*
    1. In the s23 folder, create an activity folder, an index.html file inside of it and link the index.js file.
    2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
    3. Copy the activity code and instructions from your Instructor into your index.js.
*/

// Exponent Operator
function getCube(number) {
    return number ** 3;
}

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

// Array Destructuring with Template Literals
const [houseNumber, street, state, zip] = address;
console.log(`I live at ${houseNumber} ${street}, ${state} ${zip}`);

// Object Destructuring
const animal = {
    name: "Lolong",
    species: "saltwater crocodile",
    weight: "1075 kgs",
    measurement: "20 ft 3 in",
};

const { name, species, weight, measurement } = animal;
console.log(
    `${name} was a ${species}. He weighed at ${weight} with a measurement of ${measurement}.`
);
