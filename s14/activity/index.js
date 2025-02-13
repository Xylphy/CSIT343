// console.log("Hello World");

// generateSalt()
/* 
      Create a JavaScript function called generateSalt that takes a number as input.
      - Define a constant variable named characters that contains all the characters that can be used in the salt. This includes      
        uppercase letters, lowercase letters, and digits.
      - Inside the function, create an empty string variable named salt to store the generated salt.
      - Use a for loop to generate the salt.
        - The loop should run a number of times based on the given number input.
      - Create a variable called randomIndex
        - Generate a random number e between 0 and the length of the characters string minus 1 using Math.random() and Math.floor() and save it to the randomIndex variable.
        - Research the use of Math.floor and Math.random
      - Use the randomIndex to select a character from the characters string and add the selected character to the salt string.
      - Return the generated salt string
*/

function generateSalt(number) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let salt = "";

    for (let i = 0; i < number; i++) {
        let randomIndex = Math.floor(Math.random() * (characters.length - 1));
        salt += characters[randomIndex];
    }

    return salt;
}

/* filterVowels() */
/* 
    Create a function called filterVowels. It should be able receive a string
    - Inside the function, create a variable called filteredString with an empty string as initial value.
    - Add a for Loop that will iterate through the individual letters of the given string variable based on it’s length.
    - In the loop, add an if statement that will check if the letter of the string is a vowel.
      - If it is, using continue, skip to the next iteration of the loop.
      - Else, add the current letter being looped to the given filteredString variable.
    - Outside the loop, return the filteredString variable.

*/

function filterVowels(string) {
    let filteredString = "";

    for (let i = 0; i < string.length; i++) {
        if ("aeiou".includes(string[i])) {
            continue;
        }

        filteredString += string[i];
    }

    return filteredString;
}

/* countLetterAndStop */
/* 
    Create a function called countLetterAndStop which will input a string which will return the total number of letter “a” found in the string but stop if the current letter is "d".
      - Inside the function, create a variable called letterACount which will have a value of 0 that will be used to track the number of letter "a"s found in the string.
      - Add for loop that will iterate through the length of the string.
        - Inside the loop, create an if statement that will check if the current letter in the string is equal to "a". 
          - If it is, increment the value of the variable letterACount by 1.
          - Else if, the current letter in the string is equal to "d", stop the loop using the break statement
      - Outside the loop, return the letterACount variable.


*/

function countLetterAndStop(string) {
    let letterCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "a") {
            letterCount++;
        } else if (string[i].toLowerCase() === "d") {
            break;
        }
    }

    return letterCount;
}

/* 
	6. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
		- Check syntax of the following code.
		- Check if value is returned.
		- Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
*/

function register(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    mobileNum
) {
    //returns messages if any of the parameters is not a string or is empty

    if (typeof firstName !== "string" || firstName === "") {
        return "First name must be a string and not empty";
    }

    if (typeof lastName !== "string" || lastName === "") {
        return "Last name must be a string and not empty";
    }

    if (typeof email !== "string" || email === "") {
        return "Email must be a string and not empty";
    }

    if (typeof password !== "string" || password === "") {
        return "Password must be a string and not empty";
    }

    if (typeof confirmPassword !== "string" && confirmPassword === "") {
        return "Confirm password must be a string and not empty";
    }

    if (typeof mobileNum !== "string" || mobileNum === "") {
        return "Mobile number must be a string and not empty";
    }

    //return message if mobileNum length is not equal to 11.
    if (mobileNum.length !== 11) {
        return "Mobile number must be 11 digits long";
    }

    //return message if password and confirmPassword does not match
    if (password !== confirmPassword) {
        return "Password and confirm password must match";
    }

    //return user object
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobileNum: mobileNum,
    };
}

let newUser = register(
    "Nayeon",
    "Im",
    "nayeonie@gmail.com",
    "nayeonnie21",
    "nayeonnie21",
    "09266771400"
);
console.log(newUser);

function printPattern(rows) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
        pattern += "*";
        console.log(pattern);
    }
}

printPattern(5);
