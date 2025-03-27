console.log("Hello World");

// JSON stands for JavaScript Object Notation
// JSON is also used in other programming languages for object notation

// JSON Objects
/*
    Syntax:
    {
        "key": "value",
        "key": "value",
        "key": "value"
    }
*/

// Example of JSON Object:
// {
//     "city": "Quezon City",
//     "province": "Metro Manila",
//     "country": "Philippines"
// }

// Another example of JSON Object with embedded array as value:
// {
//     "cities": [
//         {
//         "city": "Quezon City",
//         "province": "Metro Manila",
//         "country": "Philippines"
//         },
//         {
//         "city": "Manila",
//         "province": "Metro Manila",
//         "country": "Philippines"
//         }
//     ]
//  }

// JSON Methods
// Stringified method - it converts our JSON Object into a stringified JSON
// Stringified JSON is a JavaScript Object converted into a string to be used in other
// functions of a JavaScript program

let batchesArr = [
    {
        batchName: "Batch X",
    },
    {
        batchName: "Batch Y",
    },
    {
        batchName: "Batch Z",
    },
];
console.log(batchesArr);

console.log("Result from stringify method: ");
console.log(typeof JSON.stringify(batchesArr));
console.log(JSON.stringify(batchesArr));

// Stringify JSON Object
let data = JSON.stringify({
    name: "John",
    age: 31,
    address: {
        city: "Manila",
        country: "Philippines",
    },
});

console.log(data);

// JSON.parse() method - it converts a stringified JSON into a JavaScript Object
let parsedData = JSON.parse(data);

console.log("This is after the parse method:");
console.log(parsedData);

let stringifiedObject = `{"name": "John", "age": 31}`;
console.log(JSON.parse(stringifiedObject));
