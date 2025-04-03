console.log("Hello World");

const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const spanFullName = document.querySelector("#span-full-name");

// [SECTION] Event Listener
// Event is an action initiated by a user upon interacting in a webpage.
// click, hover, page load, or keypress
// events is a large part of creating interactivity in a web page.

// two arguments for add event listener
// string identifying an event
// function to be executed when the event occurs
txtFirstName.addEventListener("keyup", () => {
    spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
});

// event
// contains information on the triggered event
txtFirstName.addEventListener("keyup", (event) => {
    // element where the event happened
    console.log(event.target);
    // gets the value of the input object
    console.log(event.target.value);
});
