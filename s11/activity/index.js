/*
    2. Create a function called checkAverage which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        - add parameters appropriate to describe the arguments.
        - create a new function scoped variable called average.
        - calculate the average of the 4 number inputs and store it in the variable average.
        - research the use of Math.round() and round off the value of the average variable.
        - update the average variable with the use of Math.round()
        - console.log() the average variable to check if it is rounding off first.
    3. Add an if statement in the checkAverage function to check if the value of avg is less than or equal to 74.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is F"
    4. Add an else if statement to check if the value of avg is greater than or equal to 75 and if average is less than or equal to 79.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is D"
    5. Add an else if statement to check if the value of avg is greater than or equal to 80 and if average is less than or equal to 84.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is C"
    6. Continue to add an else if statement in the checkAverage function to check if the value of avg is greater than or equal to 85 and if average is less than or equal to 89.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is B"
    7. Add an else if statement to check if the value of avg is greater than or equal to 90 and if average is less than or equal to 95.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A"
    8. Add an else if statement to check if the value of average is greater than 96.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.
*/

function checkAverage(num1, num2, num3, num4) {
    let average = (num1 + num2 + num3 + num4) / 4;
    average = Math.round(average);
    if (average <= 74) {
        return `Hello, student, your average is ${average}. The letter equivalent is F`;
    } else if (average >= 75 && average <= 79) {
        return `Hello, student, your average is ${average}. The letter equivalent is D`;
    } else if (average >= 80 && average <= 84) {
        return `Hello, student, your average is ${average}. The letter equivalent is C`;
    } else if (average >= 85 && average <= 89) {
        return `Hello, student, your average is ${average}. The letter equivalent is B`;
    } else if (average >= 90 && average <= 95) {
        return `Hello, student, your average is ${average}. The letter equivalent is A`;
    } else if (average >= 96) {
        return `Hello, student, your average is ${average}. The letter equivalent is A+`;
    }
}
