/*
1. In the S24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("Hello World");

//Note: Some of the problems are similar to S07, but this time we will use return statements.

/*
    4. Create a function named getUserInfo which is able to return an object. 

        The object returned should have the following properties:
    	
        - key - data type

        - name - String
        - age -  Number
        - address - String
        - isMarried - Boolean
        - petName - String

        Note: Property names given is required and should not be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.

*/

function getUserInfo() {
    return {
        name: "John Doe",
        age: 25,
        address: "123 Street, Quezon City",
        isMarried: false,
        petName: "Danny",
    };
}

let user = getUserInfo();
console.log(user);

/*  
    5. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
    	
        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.


        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
	
*/

function getArtistsArray() {
    return [
        "Ben & Ben",
        "Arthur Nery",
        "Linkin Park",
        "Paramore",
        "Taylor Swift",
    ];
}

let artists = getArtistsArray();
console.log(artists);

/*
    6. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
*/

function getSongsArray() {
    return [
        "Kathang Isip",
        "Binhi",
        "In The End",
        "Bring by Boring Brick",
        "Love Story",
    ];
}

let songs = getSongsArray();
console.log(songs);

/*
    7. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
*/

function getMoviesArray() {
    return [
        "The Lion King",
        "Meet the Robinsons",
        "Howl's Moving Castle",
        "Tangled",
        "Frozen",
    ];
}

let movies = getMoviesArray();
console.log(movies);

/*
    8. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

            - Note: the array returned should have numbers only.
                    function name given is required and cannot be changed.

            To check, create a variable to save the value returned by the function.
            Then log the variable in the console.

            You can also invoke the function in the console to view the returned value of the function.

            Note: This is optional.
*/

function getPrimeNumberArray() {
    return [2, 3, 5, 7, 17];
}

let primeNumbers = getPrimeNumberArray();
console.log(primeNumbers);

/*
    9. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
        - Declare a global variable named globalTreasure and assign it with a string "Golden Key".
        - Write a function named seekGlobalTreasure that returns the value of a text: "Global Treasure Found:" and globalTreasure to the console.
        - Call seekGlobalTreasure to discover the global treasure.
*/

let globalTreasure = "Golden Key";

function seekGlobalTreasure() {
    return "Global Treasure Found:" + globalTreasure;
}

console.log(seekGlobalTreasure());

/*
    10. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
        - Inside the same script, define a function named localQuest.
        - Declare a local variable named localGems inside localQuest and assign it with a string "Shiny Diamonds".
        - Return the value of localGems inside localQuest with a text: "Local Gems Discovered:".
        - Try to access the value of localGems variable outside the localQuest function. Make a note of the result. Remember to uncomment this line after attempting to access.
*/

function localQuest() {
    let localGems = "Shiny Diamonds";
    return "Local Gems Discovered:" + localGems;
}

console.log(localQuest());

{
    var hidden = "Hidden Treasure";
}

console.log("Block Secret Revealed:" + hidden);

/* Debugging */
/* 
    11. Debug the following code to allow the functions to return the correct value and mimic the output.
    - Check syntax of the following code.
    - Check if value is returned.

*/

function returnSquared12() {
    return 12 ** 2;
}

let result = returnSquared12();
console.log(result);

function returnRegisteredEmails() {
    let emails = ["mara@mail.com", "clara@mail.com", "julie@mail.com"];
    return emails;
}

let emails = returnRegisteredEmails();
console.log(emails);

function returnItemInfo() {
    let item = {
        name: "Koko Krunch",
        description: "Koko Krunch is a staple chocolate cereal breakfast",
        price: 75,
    };

    return item;
}

let item1 = returnItemInfo();
console.log(item1);

function retrieveAccount() {
    let account = {
        username: "michaelVillanueva",
        income: 60000,
        expenses: 25000,
    };

    return account;
}

let account = retrieveAccount();
console.log(account);

/*
12. Add your changes.

13. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s08 activity".

14. Add your s08 repository link for submission.
*/
