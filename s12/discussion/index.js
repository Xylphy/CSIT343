console.log("Hello World");

// [SECTION] Switch Case Statement
// is used to perform different action based on different conditions.
// alternative to using multiple if-else statements.
/*
    Syntax:
    switch(expression/condition) {
        case value1:
            // code block
            break;
        case value2:
            // code block
            break;
        default:
            // code block
    }
*/

// Switch Case to handle different days of the week
let day = "Monday";
day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend time");
        break;
    default:
        console.log("It's just another day.");
}

// Mini Activity (3 mins)
// Create a switch statement that evaluates a student's grade (A, B, C, D, or others).
// "A": "Excellent work!"
// "B": "Good job!"
// "C": "You can do better."
// "D": "Try harder next time."
// Any other grade: "Invalid grade."
// Run the code in your browser console.
// Take a screenshot of the output and send it in the chat.

function evalGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent work!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("You can do better.");
            break;
        case "D":
            console.log("Try harder next time.");
            break;
        default:
            console.log("Invalid grade.");
    }
}

// When to use switch over if:
// switch when checking specific, fixed values (better readabilty)
// if-else for complex conditionsn or comparison (more flexibility)

// [SECTION] try-catch-finally statement
// "try catch" commonly used for error handling
// "finally" is used to specify a response that is used to handle/resolved errors


function showIntensityAlert(windSpeed){
    try {
        alert(determineTyphoonIntensity(windSpeed));
    } catch (error) {
        console.log(typeof error);
        console.warn(error.message);
    } finally {
        alert("Intensity updated will show new alert");
    }
}

showIntensityAlert(90);