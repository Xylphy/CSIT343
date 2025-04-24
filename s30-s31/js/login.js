document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);

        const { email, password } = Object.fromEntries(formData.entries());

        fetch("https://movieapp-api-lms1.onrender.com/users/login", {
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
                alert("Login successful!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Login failed. Please try again.");
            });
    });
});
