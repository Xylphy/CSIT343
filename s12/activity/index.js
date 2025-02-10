/*
    2. Create a function called login which is able to receive 3 parameters called username,password and role.
        - add an if statement to check if the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
        - if it is, return the following to inform the user that their input should not be empty:
        - "Inputs must not be empty"

    3. Add an else statement to the if statement in the login function. Inside the else statement add a switch to check the user's role add 3 cases and a default:
        - Look up JS Switch Statements to be able to accomplish the output for this activity.
        - if the user's role is admin, return the following message:
        - "Welcome back to the class portal, admin!"
        - if the user's role is teacher, return the following message:
        - "Thank you for logging in, teacher!"
        - if the user's role is a student, return the following message:
        - "Welcome to the class portal, student!"
        - if the user's role does not fall under any of the cases, as a default, return a message:
        -  "Role out of range."
        - Look up Switch Statements to be able to complete the output for this activity.
*/

function login(username, password, role) {
    if (
        username === "" ||
        username === undefined ||
        password === "" ||
        password === undefined ||
        role === "" ||
        role === undefined
    ) {
        return "Inputs must not be empty";
    } else {
        switch (role) {
            case "admin":
                return "Welcome back to the class portal, admin!";
            case "teacher":
                return "Thank you for logging in, teacher!";
            case "student":
                return "Welcome to the class portal, student!";
            default:
                return "Role out of range.";
        }
    }
}

/*
    4.  Create a function `getSeason()` that returns the season based on the month.
        - Use a switch case statement.
        - Dec - Feb = Winter
        - Mar - May = Spring
        - Jun - Aug = Summer
        - Sep - Nov = Fall
*/

function getSeason(month) {
    switch (month) {
        case "December":
        case "January":
        case "February":
            return "Winter";
        case "March":
        case "April":
        case "May":
            return "Spring";
        case "June":
        case "July":
        case "August":
            return "Summer";
        case "September":
        case "October":
        case "November":
            return "Fall";
        default:
            return "Invalid month.";
    }
}
