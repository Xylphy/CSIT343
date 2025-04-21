document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const errorMessage = document.getElementById("error-message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        console.log("Form data:", formData);

        const { email, password, confirmPassword } = Object.fromEntries(
            formData.entries()
        );

        if (password !== confirmPassword) {
            errorMessage.innerHTML = "Passwords do not match.";
            return;
        }

        fetch("https://movieapp-api-lms1.onrender.com/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response was not ok.");
                }
            })
            .then((data) => {
                console.log("Success:", data);
                alert("Registration successful!");
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.error("Error:", error);
                errorMessage.innerHTML =
                    "Registration failed. Please try again.";
            });
    });
});
