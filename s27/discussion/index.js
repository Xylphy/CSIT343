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
/*
    Mini Activity (10 mins)
    1. Create a text area where users can type a message.
    2. Display a character count below the text area.
    3. Disable typing beyond 100 characters.
    4. If the user reaches 100 characters, the counter turns red and displays:
    "Characters: 100 / 100 (Character limit reached!)"
    5. If the user stays within the limit, the counter remains normal.
    6. Take a screenshot of your browser and send it in the chat.
*/

const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
    const maxLength = 100;
    const currentLength = textInput.value.length;

    charCount.innerHTML = `Characters: ${currentLength} / ${maxLength}`;

    if (currentLength >= maxLength) {
        charCount.style.color = "red";
        charCount.innerHTML += " (Character limit reached!)";
        textInput.value = textInput.value.slice(0, maxLength);
    } else {
        charCount.style.color = "black";
    }
});
