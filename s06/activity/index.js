/*
1. In the S23 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("hello");

/*
    4. Debug the following code to return the correct value and mimic the output.
        - Check the value’s data type. Re-assign values if needed.
        - Check the if the operator used is correct.
*/

let password = "gonpachiro";
let confirmPassword = "gonpachiro";

//Research the use of .length property
let isCorrectLength = password.length === 10;

console.log("Is the password's length correct?");
console.log(isCorrectLength);

let match = password == confirmPassword;

console.log("Do the passwords match?");
console.log(match);

/*
    5. Given the values below, calculate convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
        - Log the value of the variable in the console.
*/
let tempCelsius = 132;
let resultFahrenheit = (tempCelsius * 9) / 5 + 32;
console.log("132 degrees Celsius when converted to Farenheit is");
console.log(resultFahrenheit);

/*

    6. Given the values below, identify if the values of the following variable are divisible by 8.
    - Use a modulo operator to identify the divisibility of the number to 8.
    - Save the result of the operation in a variable called remainder1.
    - Log the value of the remainder in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy8
    - Log a message in the console if num7 is divisible by 8.

*/
let num7 = 165;
//Log the value of the remainder1 in the console.
let remainder1 = num7 % 8;
console.log("The remainder of 165 divided by 8 is: ", remainder1);

console.log("Is num7 divisible by 8?");
//Log the value of isDivisibleBy8 in the console.
let isDivisibleBy8 = remainder1 === 0;
console.log(isDivisibleBy8);

/*
    7. Given the values below, identify if the values of the following variable are divisible by 4.
    - Use a modulo operator to identify the divisibility of the number to 4.
    - Save the result of the operation in a variable called remainder1.
    - Log the value of the remainder2 in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy4
    - Log a message in the console if num8 is divisible by 4.

*/
let num8 = 348;
//Log the value of the remainder2 in the console.
let remainder2 = num8 % 4;
console.log("The remainder of 348 divided by 4 is: ", remainder2);

console.log("Is num8 divisible by 4?");
//Log the value of isDivisibleBy4 in the console.
let isDivisibleBy4 = remainder2 === 0;
console.log(isDivisibleBy4);

/* 
    8. Given the values below, calculate the average and identify if the average score is greater than 75.
        - Create a new variable called, "average".
        - Calculate the average of the group scores and save it in the average variable.
        - Log the value of average variable.
        - Create a new variable called isPassing.
        - Using a relational operator, display if the average score is greater than 75.
        - Log the value of the isPassing variable.

*/

let groupA_score = 75;
let groupB_score = 80;
let groupC_score = 76;
let groupD_score = 74;

let average;
average = (groupA_score + groupB_score + groupC_score + groupD_score) / 4;

//Log the value of the average in the console.
console.log("Average score of the group:");
console.log(average);

let isPassing = average > 75;
//Log the value of the average in the console.
console.log("Average score of the group is greater than 75?");
console.log(isPassing);


/*

9. Given the values below, calculate the total number of minutes in a year and save the result in a variable called resultMinutes.
    - Log the result in the console.

*/
let minutesHour = 60;
let hoursDay = 24;
let daysYear = 365;

let resultMinutes = minutesHour * hoursDay * daysYear;
console.log("The number of minutes in year: ");
console.log(resultMinutes);
