console.log("Hello World");

/*
    Objects Recall:

    1. Creating objects using object literal syntax:
    Syntax:
    var obj = {
        key1: value1,
        key2: value2,
        ...
    };

    2. Creating objects using constructor function:
    Useful when we need to create several objects with different values but same properties
    Syntax:

    function ObjectName(key1, key2, ...) {
        this.key1 = value1;
        this.key2 = value2;
        ...
    }
*/

function Laptop(name, manufacturedDate) {
    this.name = name;
    this.manufacturedDate = manufacturedDate;
}

/*
    regular function

    function laptop(name, manufacturedDate){
        let name = name;
        let manufacturedDate = manufacturedDate;
    }

*/

let laptop1 = new Laptop("Dell", "2020-01-01");

let myLaptop = new Laptop("MacBook Air", 2020);
console.log(myLaptop);

// no new keyword
// Returns "undefined" without the "new" operator because the "Laptop" function does not return anything
let oldLaptop = Laptop("HP", 2015);
console.log(oldLaptop); // undefined

/*
    Object methods:
        - Methods are functions within an object. They can be accessed and invoke from an object.
*/

let person = {
    // Property / key
    name: "John",

    //method
    talk: function () {
        console.log("Hello, my name is " + this.name);
    },
};

person.talk(); // Hello, my name is John
console.log(person);

// Adding methods to objects
person.walk = function () {
    console.log(this.name + " walked 25 steps forward.");
};

console.log(person);
person.walk(); // John walked 25 steps forward.

let friend = {
    firstname: "Jane",
    lastname: "Doe",
    address: {
        city: "New York",
        state: "NY",
    },
    introduce: function () {
        console.log("Hello my name is " + this.firstname + " " + this.lastname);
    },
};

console.log(friend);
friend.introduce(); // Hello my name is Jane Doe

// Object methods can also receive arguments much like regular functions

friend.greet = function (object) {
    console.log("Hi " + object.name + "!");
};

friend.greet(person); // Hi John!

// Real World Application of Objects - Constructor with Methods
function Student(fullName, email, age) {
    this.fullname = fullName;
    this.email = email;
    this.age = age;
    this.subjects = [];

    this.enroll = function (subjectName) {
        this.subjects.push(subjectName);
        return "Enrolled in " + subjectName;
    };

    this.introduction = function () {
        return "Hello I'm " + this.fullName;
    };
}

let student1 = new Student("Jeffrey Doe", "jeffdoe@gmail.com", 20);
let student2 = new Student("John Smith", "johnsmith@gmail.com", 22);

console.log(student1);
console.log(student2);


