/*

Description: Build a calculator that takes user input for basic operations.

Features:
Ask the user to input two numbers and an operator (+, -, *, /, ^2, abs, sqrt).
Perform the calculation and display the result.
Ask if the user wants to perform another calculation or exit.
Focus: Conditionals for operator selection and loops for repeated use.

Extra task: Create a calculator which is able to calculate quadratic equation e.x.: x^2 + x + 1 = 0
*/

const prompt = require('prompt-sync')();

console.log("SIMPLE CALCULATOR \nWelcome to the Simple Calculator app, ver 1.0. \nCreated by JanVas(C).");
console.log("The app is going to ask you for two numbers and an operator. Please provide them when prompted. End the app with the codeword END.");
let exit = 1;

while (exit !== "exit") {
    let num1 = parseFloat(prompt("Please, enter the first number:"));
    while (isNaN(num1)) {
        console.log("Hey, please input a valid first number.")
        num1 = parseFloat(prompt("Please, enter the first number:"));
    };
    let num2 = parseFloat(prompt("Please, enter the second number:"));
    while (isNaN(num2)) {
        console.log("Hey, please input a valid second number.")
        num2 = parseFloat(prompt("Please, enter the second number:"));
    };
    let operator = prompt("Please, enter the desired operator. Choose between (+, -, *, /, ^2, abs, sqrt):");
    while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "^2" && operator !== "abs" && operator !== "sqrt") {
        console.log("Hey, please input a valid operator.")
        operator = prompt("Please, enter the desired operator. Choose between (+, -, *, /, ^2, abs, sqrt):");
    };

    if (operator == "+") {
        let result = num1 + num2;
        console.log(`Your operation: ${num1} ${operator} ${num2} = ${result}.`);
    } else {};
    if (operator == "-") {
        let result = num1 - num2;
        console.log(`Your operation: ${num1} ${operator} ${num2} = ${result}.`);
    } else {};
    if (operator == "*") {
        let result = num1 * num2;
        console.log(`Your operation: ${num1} ${operator} ${num2} = ${result}.`);
    } else {};
    if (operator == "/") {
        let result = num1 / num2;
        console.log(`Your operation: ${num1} ${operator} ${num2} = ${result}.`);
    } else {};
    if (operator == "^2") {
        let result1 = num1 * num1;
        let result2 = num2 * num2;
        console.log(`Your operations: ${num1}${operator} = ${result1} and ${num2}${operator} = ${result2}.`);
    } else {};
    if (operator == "abs") {
        let result1 = Math.abs(num1);
        let result2 = Math.abs(num2);
        console.log(`Your operation: the ${operator} of ${num1} is ${result1} and the ${operator} of ${num2} is ${result2}.`);
    } else {};
    if (operator == "sqrt") {
        let result1 = Math.sqrt(num1);
        let result2 = Math.sqrt(num2);
        console.log(`Your operation: the ${operator} of ${num1} is ${result1} and the ${operator} of ${num2} is ${result2}.`);
    } else {};
    exit = prompt("If you want to make another calculation, write anything and/or press ENTER. If you want to exit the app, write EXIT.");
};
console.log("You have exited the app. See you soon!");