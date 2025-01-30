console.log("Hello world");

// [SECTION] Functions
/* 
- lines/blocks of codes that tell our device/application to perform a 
certain task when called/invoked.
- complicated tasks to run several lines of codes in succession.
- to repeating lines/blocks of codes that perform the same task.
*/

// [SECTION] Function Declaration
/*
    function functionName() {
        // code block
    }
*/

// Example:
function sayHello() {
  console.log("Hello world");
}

// Display car information
function displayCarInfo() {
  console.log("Car: Toyota");
  console.log("Model: Vios");
  console.log("Year: 2020");
}

// [SECTION] Function Invocation/Call

sayHello();
displayCarInfo();

// declareFunc() - We cannot invoke a function we have yet to define.

// [SECTION] Function Naming Convention
/*
    JS Function names are also case-sensitive.
    - must start with a letter, underscore, or dollar sign.
    - camelCase is the standard naming convention for functions.
    - function names should be descriptive.
*/

// good practice
function displayCourses() {
  let courses = ["Science 101", "Math 101", "English 101"];
  console.log(courses);
}

displayCourses();

// Avoid generic names to avoid confusion with your code.
function get() {
  let name = "sampaguita";
  console.log(name);
}

get();

// Descriptive function name - indicates the action to be executed.
function getFlowerName() {
  let name = "sampaguita";
  console.log(name);
}

getFlowerName();

// Avoid pointless and inappropriate function names.
// foo, bar - placeholder variable name/meta variable name
function foo() {
  console.log("foo");
}

foo();

// Appropriate function name
function displayModulo() {
  console.log(10 % 3);
}

displayModulo();
