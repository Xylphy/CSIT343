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
