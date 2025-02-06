/*
    
    1. Create a function called addNum which will be able to add two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the addition.
*/
function addNum(num1, num2) {
    return num1 + num2;
}

/*     
    2. Create a function called subNum which will be able to subtract two numbers.
        - Numbers must be provided as arguments.
        - Return the result of subtraction.
*/

function subNum(num1, num2) {
    return num1 - num2;
}

/*
    3. Create a function called multiplyNum which will be able to multiply two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the multiplication.
*/
function multiplyNum(num1, num2) {
    return num1 * num2;
}
/*
    4. Create a function divideNum which will be able to divide two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the division.
*/
function divideNum(num1, num2) {
    return num1 / num2;
}
/*
    5. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
        - a number should be provided as an argument.
        - look up the formula for calculating the area of a circle with a provided/given radius.
        - look up the use of the exponent operator.
        - return the result of the area calculation.
*/
function getCircleArea(number) {
    return 3.1416 * number ** 2;
}
/*
    6. Create a function called getAverage which will be able to get total average of four numbers.
        - 4 numbers should be provided as an argument.
        - look up the formula for calculating the average of numbers.
        - return the result of the average calculation.
*/
function getAverage(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}
/*
    
    7. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
        - this function should take 2 numbers as an argument, your score and the total score.
        - First, get the percentage of your score against the total. You can look up the formula to get percentage.
        - Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
        - return the value of the variable isPassed.
        - This function should return a boolean.
*/
function checkIfPassed(myScore, totalScore) {
    let percentage = (myScore / totalScore) * 100;
    let isPassed = percentage > 75;
    return isPassed;
}
/* 
    8. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
        - Check syntax of the following code.
        - Check if value is returned.
        - Check the parameters and arguments
*/

function register(firstname, lastname, email, password, mobileNum) {
    return {
        firstName: firstname,
        lname: lastname,
        email: email,
        password: password,
        mobileNum: mobileNum,
    };
}

let newUser = register(
    "Lilo",
    "Pelekai",
    "lilostitch@gmail.com",
    "liloohana1234",
    "09276612409"
);
console.log(newUser);

function createProduct(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
    };
}

let newProduct = createProduct("Chocolate Bar", 200, 50, true);
console.log(newProduct);

function createTeamArr(member1, member2, member3, member4, member5) {
    let members = [member1, member2, member3, member4, member5];
    return members;
}

let newTeam = createTeamArr(
    "Eugene",
    "Dennis",
    "Alfred",
    "Vincent",
    "Jeremiah"
);

console.log(newTeam);
