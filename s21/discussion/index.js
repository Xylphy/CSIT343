console.log("Hello World");

// [SECTION] JavaScript Objects
// An object is a data type that is used to represent real world objects.
// Collection of related data and/or functionality.
// Objects are represented in a "key: value" pair.
// Different data types may be stored in an object's property creating complex data structures.

// Create object using object literals
// "{}" this called object literals
// This creates/declares and object and also initializes/assigns its properties upon creation.

// cellphone - name, manufactured date

let cellphone = {
    name: "Iphone 16",
    manufacturedDate: "2024",
};

console.log("Result from creating objects using object literals {}: ");
console.log(cellphone);
console.log(typeof cellphone);

// Accessing Object Properties
// "." dot notation

console.log("Result from dot notation: " + cellphone.name);
console.log("Result from dot notation: " + cellphone.manufacturedDate);

// Initializing/Adding/Deleting/Reassigning Object Properties

//We can update object properties and its values
cellphone.manufacturedDate = "9-20-2024";
console.log(cellphone.manufacturedDate);

// Accessing a property that does not exist in the object
// Returns undefined
console.log(cellphone.price); //undefined

// Add new properties to an object using dot notation
cellphone.price = 54490;
console.log(cellphone);

let newCellphone = cellphone; // Assigned by reference
newCellphone.name = "Samsung s24";
console.log(cellphone.name);

let car = {};
console.log(car);

// Initializing/adding object properties using dot notation.
car.name = "Honda Civic";

console.log("Result from adding properties using dot notation:");
console.log(car);

// We can also access a property via array literals
console.log(car["name"]);

// Add a property using array literals
car["Manufactured Date"] = "12-01-20";
console.log(car);

// delete created property
delete car["Manufactured Date"];
console.log(car);

// Arrays inside objects

let cart = {
    userId: "2000-1A",
    username: "michaelShawn",
    products: ["Bread", "Cheese", "Lettuce"],
    dateCreated: "03-10-2025",
};

console.log(cart.products);
cart.products.pop();

console.log(cart.products);
console.log(cart.products.length);

/*

    Mini Activity (5 mins) - until 2:00 pm
 
    1. Create an object named student with the following properties:
        name: "Alice"
        age: 20
        course: "Computer Science"
        grades: [85, 90, 78] 

    2. Print the initial student object.
    3. Add a new property hobbies with an array of at least two hobbies.
    4. Update the course property to "Software Engineering".
    5. Remove the age property.
    6. Add a new grade (95) to the grades array.
    7. Print the final student object.
    8. Take a screenshot of the console output and send it in the chat.
 
    Expected Output:

    Initial student object: 
    {name: 'Alice', age: 20, course: 'Computer Science', grades: Array(3)}

    Final student object: 
    {name: 'Alice', course: 'Software Engineering', grades: Array(4), hobbies: Array(2)}
 
*/

let student = {
    name: "Alice",
    age: 20,
    course: "Computer Science",
    grades: [85, 90, 78],
};

console.log("Initial student object: ");
console.log(student);

student.hobbies = ["Reading", "Coding"];
student.course = "Software Engineering";

delete student.age;

student.grades.push(95);

console.log("Final student object: ");
console.log(student);
