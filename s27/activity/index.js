console.log("Hello World");

const txtFirstName = document.getElementById("txt-first-name");
const txtLastName = document.getElementById("txt-last-name");
const txtEmail = document.getElementById("txt-email");
const mobileNumber = document.getElementById("mobile-number");

const pFullName = document.getElementById("p-full-name");
const pEmail = document.getElementById("p-email");
const pMobileNumber = document.getElementById("p-mobile-number");
const introMessage = document.getElementById("intro-message");

function areFieldsNotEmpty() {
    if (
        txtFirstName.value.trim() !== "" &&
        txtLastName.value.trim() !== "" &&
        txtEmail.value.trim() !== "" &&
        mobileNumber.value.trim() !== ""
    ) {
        introMessage.innerHTML = `Hello, I am ${txtFirstName.value.trim()} ${txtLastName.value.trim()}, you can contact me on this number ${mobileNumber.value.trim()}`;
    } else {
        introMessage.innerHTML = "";
    }
}

txtFirstName.addEventListener("keyup", () => {
    pFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
    areFieldsNotEmpty();
});

txtLastName.addEventListener("keyup", () => {
    pFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
    areFieldsNotEmpty();
});

txtEmail.addEventListener("keyup", () => {
    pEmail.innerHTML = `${txtEmail.value}`;
    areFieldsNotEmpty();
});

mobileNumber.addEventListener("keyup", () => {
    const mobileValue = mobileNumber.value;

    if (mobileValue.length === 11 && mobileValue.startsWith("0")) {
        pMobileNumber.style.color = "black";
        pMobileNumber.innerHTML = `${mobileValue}`;
    } else {
        pMobileNumber.style.color = "red";
        pMobileNumber.innerHTML = "Invalid mobile number!";
    }
    areFieldsNotEmpty();
});
