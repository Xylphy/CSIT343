/*
1. In the s04 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
 */

console.log("Hello World");

let clients = ["24Chicken", "Jollibee", "Mcdonald's", "Mang Inasal", "KFC"];
console.log("Our Clients are: ")
console.log(clients);

let employee_profile = {
    username: "ceo_mark",
    fullName: "Mark Jones",
    age: 40,
    position: "CEO",
    isActive: true

}

console.log("My Employee Profile: ")
console.log(employee_profile);

let deposits = [5000, 6000, 3000, 2000];
console.log("Your deposits: " + deposits);

let expenses = [1000, 2000, 500, 210];
console.log("Your expenses: " + expenses);

let isAdmin = true;
console.log("Is the current user an admin?: " + isAdmin);

/*
4. Create the following variables to store the following company details:

    - Variable Name - Value Data Type:
        - companyName - String
        - companyEmail - String
        - companyContact - Number
        - employees - Array
        - companyAddress - Object

    - The employees array should contain at least 3 employee names as Strings.
    - The companyAddress object should contain the following key-value pairs:
        - street: <value>
        - city: <value>
        - state: <value>
*/

let companyName = "XYZ Industries";
let companyEmail = "xyzindustries@gmail.com";
let companyContact = "09180001234";
let employees = ["Megumi", "Yuji", "Nobara"];
let companyAddress = {
    street: "Orange St.",
    city: "Sacramento",
    state: "California"
};


/*
5. Research how to concatenate strings using + operator in Javascript. 

    - Create variable named intro to store a message.
        - Combine the string "Welcome to our company," and the companyName variable.
        - Log the message "Welcome to our company," and your companyName to the console.
        - Example: "Welcome to our company, XYZ Industries!"

*/

let intro = "Welcome to our company, " + companyName;
console.log(intro);


/*
6. Research how to determine the data type of each variable.
    - Add the variables of different primitive data types: 

        - Variable Name - Value:
        - str = "Twice"
        - num = 27
        - bool = true
        - arr = ["Dahyun", "Chaeyoung", "Mina"]
        - obj = { twice: "Dahyun" }

    - Use the operator to determine the data type of each variable.
    - Log the result to the console.
*/

let str = "Twice";
let num = 27;
let bool = true;
let arr = ["Dahyun", "Chaeyoung", "Mina"];
let obj = { twice: "Dahyun" };

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);


/*
7. Identify and implement the best practices of creating and using variables by avoiding errors and debugging the following codes. 
    - Log the values of each variable to follow/mimic the output.
*/