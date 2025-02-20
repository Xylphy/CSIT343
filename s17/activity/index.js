/* 
1. In the S17 folder, create an activity folder and an index.html and index.js file inside of it.
    - Create an index.html file to attach our index.js file
    - Copy the template provided by your Instructor and paste it in an index.js file.
    - Update your local sessions git repository and push to git with the commit message of Add template code s17.
    - Console log the message Hello World to ensure that the script file is properly associated with the html file.
*/

console.log("Hello World");

/*
    Create functions which can manipulate our arrays.
*/

let registeredPlanets = ["Mercury", "Venus", "Earth", "Mars"];
console.log(registeredPlanets);

/*
    
    2. Create a function called addPlanet which will allow us to register/add new planets into the registeredPlanets list.
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the end of the array.
            - Else, return the string: "Incorrect Input Type"
        - return the updated array.
        - Invoke the function and pass the registeredPlanets and a planet as arguments
*/

function addPlanet(array, planet) {
    if (typeof planet === "string") {
        array.push(planet);
    } else {
        return "Incorrect Input Type";
    }
    return array;
}


/*
    3. Create a function called deletePlanet which will delete the last planet in the registeredPlanets array.
        - It will receive an array as parameter.
        - Check if the array is not empty:
            - If it is, delete the last planet in the array
            - Else return a message: "No planets registered."
        - Return the updated array.
        - Invoke the function and pass the registeredPlanets array as an argument.
*/

function deletePlanet(array) {
    if (array.length > 0) {
        array.pop();
    } else {
        return "No planets registered.";
    }
    return array;
}

/* 
    4. Create a function called unshiftPlanet which will add a planet in the registeredPlanets array using unshift().
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the beginning of the array.
                - Look up the use of the unshift() method in JS Arrays
            - Else, return the string: "Incorrect Input Type"
        - Invoke the function and pass the registeredPlanets and a planet as arguments
        
*/

function unshiftPlanet(array, planet) {
    if (typeof planet === "string") {
        array.unshift(planet);
    } else {
        return "Incorrect Input Type";
    }
    return array;
}

/* 
    5. Create a function called shiftPlanet which will delete a planet in the registeredPlanets array using shift().
        - It will receive an array as parameter
        - If the array is not empty,
            - Use shift method to delete the first element to the array
            - Return the updated array
        
        - Invoke the function and pass the registeredPlanets array as an argument
*/

function shiftPlanet(array) {
    if (array.length > 0) {
        array.shift();
    } else {
        return "No planets registered.";
    }
    return array;
}

/* 
    6. Create a function called splicePlanets which will replace 1 element in the registeredPlanets array with static values using splice().
        - It will receive an array, a planet and index as parameters
        - If the array is not empty,
            - Use splice() to replace an element in the array from the given index with the planet received as argument.
                - Return the array
        - Else return "No planets registered"
        - Invoke the function and pass the registeredPlanets array and a planet as a parameter
*/

function splicePlanets(array, planet, index) {
    if (array.length > 0) {
        array.splice(index, 1, planet);
    } else {
        return "No planets registered.";
    }
    return array;
}
