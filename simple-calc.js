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

console.log('Select operation:');
console.log("1. Addition (+)");
console.log("2. Subtraction (-)");
console.log("3. Multiplication (*)");
console.log("4. Division (/)");
console.log("5. Elevation (^2)");
console.log("6. Modulus of a number (abs)");
console.log("7. Square root (sqrt)");

const choice = prompt("Enter the operation number: (1/2/3/4/5/6/7): ");

let num1, num2, result;

if (['1', '2', '3', '4', '5'].includes(choice)) {
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));

    switch (choice) {
        case '1':
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case '2':
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case '3':
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case '4':
            if (num2 === 0) {
                console.log("Error! Division by zero is not possible!");
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            }
            break;
        case '5':
            result = Math.pow(num1, num2);
            console.log(`${num1} ^ ${num2} = ${result}`);
            break;
    }
} else if (['6', '7'].includes(choice)) {
    num1 = parseFloat(prompt("Enter the number: "));

    switch (choice) {
        case '6':
            result = Math.abs(num1);
            console.log(`|${num1}| = ${result}`);
            break;
        case '7':
            if (num1 < 0) {
                console.log("Error! You cannot calculate the square root of a negative number.");
            } else {
                result = Math.sqrt(num1);
                console.log(`√${num1} = ${result}`);
            }
            break;
    }
}

