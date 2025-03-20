// console.log("Hello World");

// [SECTION] Exponent Operator

const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

/*
    Mini Activity #1 (5 mins) until 1:35 pm
    1. Create an array named numbers containing 5 random between 1 and 20.
    2. Print the original numbers array before transformation.
    3.Use an array iteration method to transform each number based on the following rules:
        - If the number is even, raise it to the power of its index.
        - If the number is odd, raise it to the power of (index + 1).
    4. Store the transformed values in a new array named transformedNum and print the final result.
    5. Take a screenshot of the console output and send it in the chat.

    Expected output:
    Random numbers:
    [2, 19, 13, 4, 5]

    Transformed numbers:
    [1, 361, 2197, 64, 3125]
*/

let numbers = [2, 19, 13, 4, 5];

console.log("Random Numbers: ");
console.log(numbers);

let transformedNum = numbers.map((num, index) =>
	num % 2 === 0 ? num ** index : num ** (index + 1)
);

console.log("Transformed numbers: ");
console.log(transformedNum);

// [SECTION] Template Literals
// Allows us to write string without using the concatenation operator (+)
// Greatly helps with code readability

let name = "Tolits";

// Pre-Template literal String
// single or double quotes
let message = "Hello " + name + "! Welcome to programming!";
console.log("Message without template literals: " + message);

// String Using Template literals
// uses backticks (``)
message = `hello ${name}! Welcome to programming!`;
console.log(`Message without template literals: ${message}`);

// Multi-line ussing template literals
const anotherMessage = `
${name} attended a math competition.
He won it by solving the problem 8 raise to 2 with the solution of ${firstNum}
`;

console.log(anotherMessage);

// Allow us to write string with embedded expressions.
const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

/*
    Mini Activity #2 (5 mins) - until 2:00 pm
    1. Create an array named students containing three objects. 
       Each object should have the following properties: 
       - name (string)
       - age (number)
       - hobby (string)

    2. Use an iteration method to generate a multi-line introduction for each student using template literals.

    3. Print each multi-line introduction separately in the browser console.

    4. Take a screenshot of the console output and send it in the chat.

    Expected Output:
    Array of student objects:
    [
        { name: "Alice", age: 22, hobby: "painting" },
        { name: "Bob", age: 24, hobby: "gaming" },
        { name: "Charlie", age: 20, hobby: "reading" }
    ]

    Multi-line introduction:
    "Alice is 22 years old.
    They enjoy painting."

    "Bob is 24 years old.
    They enjoy gaming."

    "Charlie is 20 years old.
    They enjoy reading."
*/

const students = [
        { name: "Alice", age: 22, hobby: "painting" },
        { name: "Bob", age: 24, hobby: "gaming" },
        { name: "Charlie", age: 20, hobby: "reading" }
    ];

const introductions = students.map(student => 
	`${student.name} is ${student.age} years old.
	The enjoy ${student.hobby}`
);

console.log(introductions);

introductions.forEach(intro => console.log(`"${intro}"`));

// [SECTION] Array Destructuring
// Allow us to name array elements with variables instead of using index numbers.

// const fullName = ["Juan", "Dela", "Cruz"];

// // Pre-Array Destructuring
// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);

// console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);

// // Array Destructuring
// const [firstName, middleName, lastName] = fullName;

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

// [Section] Object Destructuring
// Shortens the syntax for accessing properties from objects.

let person = {
	givenName: "John",
	maidenName: "Doe",
	familyName: "Smith"
};

// Pre-object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's good to see you again.`);

// Object Destructuring
let {givenName, maidenName, familyName} = person;

console.log(givenName);
console.log(maidenName);
console.log(familyName);

console.log(`Hello ${givenName} ${maidenName} ${familyName}! It's good to see you again.`);

// Destructure in the function parameter
function getFullName({givenName, maidenName, familyName}){
	console.log(`${givenName} ${maidenName} ${familyName}`);
}

getFullName(person);

/*
    Mini Activity #3 (10 mins) until 2:35 pm

    1. Create an object named employee with the following properties:
        - fullName (John Doe)
        - department (Software Engineering)
        - projects (array of project objects, each with title and duration in months)
            - title: "Inventory System", duration: 6 
            - title: "Mobile Food Delivery App", duration: 8
            - title: "E-commerce Website", duration: 12
        - skills ("JavaScript", "UI/UX", "AWS Cloud Computing")
    2. Destructure the following values from the employee object:
        - Extract fullName and department directly.
        - Extract the first project’s title and duration.
        - Extract only the last skill from skills using array destructuring.
    3. Swap the first and last project in the projects array using destructuring.
    4. Print the extracted values and the updated projects array to the console.

    // Expected Output

    Employee Name: John Doe
    Department: Software Engineering
    First Project: Inventory System (6 months)
    Last Skill: AWS Cloud Computing

    Updated Projects Array:
    [
    { title: "E-commerce Website", duration: 12 },
    { title: "Mobile Food Delivery App", duration: 8 },
    { title: "Inventory System", duration: 6 }
    ]

*/

const employee = {
    fullName: "John Doe",
    department: "Software Engineering",
    projects: [
        { title: "Inventory System", duration: 6 },
        { title: "Mobile Food Delivery App", duration: 8 },
        { title: "E-commerce Website", duration: 12 }
    ],
    skills: ["JavaScript", "UI/UX", "AWS Cloud Computing"]
};

console.log(employee);

const {fullName, department} = employee;

const {title: firstProjectTitle, duration: firstProjectDuration} = employee.projects[0];

const [,,lastSkill] = employee.skills;

console.log(`Employee Name: ${fullName}`);
console.log(`Department: ${department}`);
console.log(`First Project: ${firstProjectTitle} (${firstProjectDuration} months)`);
console.log(`Last Skill: ${lastSkill}`);

// Swap the first and last project using destructuring
[employee.projects[0], employee.projects[2]] = [employee.projects[2], employee.projects[0]]

console.log("Updated Projects Array: ");
console.log(employee.projects);