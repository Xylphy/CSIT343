/*
1. In the s05 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("hello");

/*
    4. Debug the following code to return the correct value and mimic the output.
        - Check the value’s data type. Re-assign values if needed.
        - Check the if the operator used is correct.
*/

    let num1 = 25;
    let num2 = 5;
    let sum1 = num1 + num2;

    console.log("The result of num1 + num2 should be 30.");
    console.log("Actual Result:");
    console.log(sum1);

    let num3 = 156;
    let num4 = 44;
    let sum2 = num3 + num4;

    console.log("The result of num3 + num4 should be 200.");
    console.log("Actual Result:");
    console.log(sum2);

    let num5 = 17;
    let num6 = 10;
    let difference1 = num5 - num6;

    console.log("The result of num5 - num6 should be 7.");
    console.log("Actual Result:");
    console.log(difference1);

/*
5. Research about Modulo/Remainder Assignment Operator
	- Using the variable modulo,use the modulo assignment operator to get the remainder of the modulo by 3.
	- Log the value of the total cost in the console to follow/mimic the output.
*/
let modulo = 11;
modulo %= 3;
console.log("Updated modulo variable value: ");
console.log(modulo);


/*
6. Research about Multiplication Assignment Operator
	- Use the multiplication assignment operator to multiply the product by 4.
	- Log the updated value of the product in the console to follow/mimic the output.
*/
let product = 6;
product *= 4;
console.log("Updated product variable value: ");
console.log(product);

/*
7. Research about Division Assignment Operator
	- Using the variable quotient,use the division assignment operator to divide the quotient by 3.
	- Log the updated value of the quotient in the console to follow/mimic the output.
*/
let quotient = 24;
quotient /= 3;
console.log("Updated quotient variable value: ");
console.log(quotient);

