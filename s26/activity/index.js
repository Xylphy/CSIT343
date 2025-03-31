console.log("Hello work");

const container = document.getElementById("container");
const text = document.getElementById("text");
const themeDark = document.getElementById("themeDark");
const themeRed = document.getElementById("themeRed");
const themeGreen = document.getElementById("themeGreen");
const themeReset = document.getElementById("themeReset");

themeDark.addEventListener("click", () => {
    text.style.color = "white";
    text.style.fontFamily = "Times New Roman";
    container.style.backgroundColor = "black";
});

themeRed.addEventListener("click", () => {
    text.style.color = "white";
    text.style.fontFamily = "Fantasy";
    container.style.backgroundColor = "red";
});

themeGreen.addEventListener("click", () => {
    text.style.color = "white";
    text.style.fontFamily = "Garamond";
    container.style.backgroundColor = "green";
});

themeReset.addEventListener("click", () => {
    text.style.color = "black";
    text.style.fontFamily = "";
    container.style.backgroundColor = "white";
});
