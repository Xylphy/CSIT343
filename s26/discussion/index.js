console.log("Hello World");

// [SECTION] DOM
// Access or modifyu the properties of an element in a webpage.

// [SECTION] Using DOM
// Retrieve an element from the DOM

// Query Selector
const welcomeTxt = document.querySelector("#welcome");
console.log(welcomeTxt);

// getElementById
const welcomeText = document.getElementById("welcome");
console.log(welcomeText);

const redButton = document.getElementById("redBtn");
const blackButton = document.getElementById("blkBtn");

// querySelector vs getElementsBy(ById, ByClassName, etc)
// Returns: querySelector returns first matching element
// while getElementsBy returns live collection (HTML Collection)
// of all matching elements.

// SelectorType: querySelector uses CSS Selectors (.class, #id, etc)
// while getElementsBy uses specific element names (id, tag, class)

// Use Case: querySelector - single specific element while
// getElementsBy - multiple elements of same type.

// Performance: querySelector is slower than getElementsBy

// [SECTION] DOM Object Properties

// .innerHTML property contains the text content of an element
// as well ass the tags of other elements inside

welcomeTxt.innerHTML = "I am Atomic";

// .style property actually contains the elements visual properties.

welcomeTxt.style.color = "Red";
welcomeTxt.style.color = "Green";
welcomeTxt.style.fontSize = "80px";

function changeColorToRed() {
    welcomeTxt.style.color = "Red";
}

function changeColorToDefault() {
    welcomeTxt.style.color = "Black";
}

// [SECTION] Event Listeners
// Whenever a user interacts with a webpage,
// this action is considered as an event.
// click, hover, page load, or keypress

redButton.addEventListener("click", () => {
    welcomeTxt.style.color = "Red";
});

blackButton.addEventListener("click", () => {
    welcomeTxt.style.color = "Black";
});
