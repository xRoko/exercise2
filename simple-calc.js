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


let continueCalculation = true;

while (continueCalculation) {
    let number_a = parseFloat(prompt('Please, enter number a= '));
    let number_b = parseFloat(prompt('Please, enter number b= '));
    let operator = prompt('Please, enter required operator (+, -, *, /, ^2, abs, sqrt): ').trim();

    console.log('');
    let result = '';


    if (operator === '+') {
        result = `Addition: ${number_a} + ${number_b} = ${number_a + number_b}`;

    } else if (operator === '-') {
        result = `Subtraction: ${number_a} - ${number_b} = ${number_a - number_b}`;

    } else if (operator === '*') {
        result = `Multiplication: ${number_a} * ${number_b} = ${number_a * number_b}`;

    } else if (operator === '/') {
        if (number_b === 0) {
            result = 'Division by zero is not allowed.';
        } else {
            result = `Division: ${number_a} / ${number_b} = ${(number_a / number_b).toFixed(2)}`;
        }
    } else if (operator === '^2') {
        result = `Square of ${number_a} = ${number_a * number_a}\nSquare of ${number_b} = ${number_b * number_b}`;

    } else if (operator === 'abs') {
        result = `Absolute value of ${number_a} = ${Math.abs(number_a)}\nAbsolute value of ${number_b} = ${Math.abs(number_b)}`;

    } else if (operator === 'sqrt') {
        if (number_a < 0) {
            result = 'Square root of negative number is not allowed.';
        } else {
            result = `Square root of ${number_a} = ${Math.sqrt(number_a).toFixed(2)}\nSquare root of ${number_b} = ${Math.sqrt(number_b).toFixed(2)}`;
        }
    } else {
        result = 'Invalid operator. Please try again.';
    }

    console.log(result);

    let userChoice = prompt('Do you want to continue? y/n: ');
    if (userChoice !== 'y') {
        continueCalculation = false;
        console.log('Thank you for using the calculator. Goodbye!');
    } else continueCalculation = true;
}







