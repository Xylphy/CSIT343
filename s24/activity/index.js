//Important Note: Do not change the variable names.
//All required classes, variables and function names are listed in the exports.

/* 
1. In the s24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Instructor into your index.js.
*/

/* 
  4. Create a class called Author and a constructor that will accept a name, age, address and isActive
  5. Create a class of a Book and a constructor that will accept a title, author, year and status with "Available" as default value as it’s properties. Have a default value of "Available" for the status property.
  Look up how to setup default values of properties in a constructor.
*/
// Javascript Classes

class Author {
    constructor(name, age, address, isActive) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.isActive = isActive;
    }
}

class Book{
    constructor(title, author, year, status = "Available"){
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}

//Debugging

class Employee {
    constructor(firstName, lastName, age, department, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.department = department;
        this.password = password;
    }

    login(email, password) {
        if (email !== this.email) {
            return "Incorrect Email";
        } else if (password !== this.password) {
            return "Incorrect Password";
        } else {
            return "Successful Login!";
        }
    }
}

class Project {
    constructor(name, budget, department, dateStarted, endDate) {
        this.name = name;
        this.budget = budget;
        this.department = department;
        this.dateStarted = dateStarted;
        this.endDate = endDate;
    }
}

/* Don't Modify */
let employee1 = new Employee(
    "Aiah",
    "Arceta",
    23,
    "Marketing",
    "aiahkins@gmail.com",
    "cherryOnTop"
);
console.log("Result of creating an instance of Employee class");
console.log(employee1);
console.log(
    "Result of using the login() method of an instance of Employee class"
);
console.log(employee1.login("aiahkins@gmail.com", "cherryOnTop"));
console.log(employee1.login("aiah@gmail.com", "cherryOnTop"));
console.log(employee1.login("aiahkins@gmail.com", "salaminsalamin"));

let project1 = new Project(
    "Project AI",
    2500000,
    "Development Team",
    "08-14-2014",
    "08-09-2024"
);
console.log("Result of creating an instance of Project class");
console.log(project1);
