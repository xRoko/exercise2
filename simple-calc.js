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

let exit = "no";
while (exit !== "yes") {
    let numberOne = Number(prompt('Enter the first number: '));
    let operator = prompt('Enter the operator (+, -, *, /, ^2, abs, sqrt): ');
    if ((!isNaN(numberOne)) && (operator === "abs" || operator === "sqrt")) {
        let result;
        switch (operator) {
            case 'abs':
                result = Math.abs(numberOne);
                break;
            case 'sqrt':
                result = numberOne >= 0 ? Math.sqrt(numberOne) : "Cannot find square root of negative number";
                break;
        }
        console.log(`Result: ${result}`);
        exit = "x";
        while (exit !== "yes" && exit !== "no") {
            exit = prompt(`Do you want to exit (yes/no): `)
        }
    } else {
        let numberTwo = Number(prompt('Enter second number: '));
        let operators = ["+", "-", "*", "/", "^2", "abs", "sqrt"]
        let result;

        if (isNaN(numberOne) || isNaN(numberTwo)) {
            console.log(`Your inputs are not numbers.`)
        } else if (!operators.includes(operator)) {
            console.log(`Wrong operator selected.`)
        } else {
            switch (operator) {
                case '+':
                    result = numberOne + numberTwo;
                    break;
                case '-':
                    result = numberOne - numberTwo;
                    break;
                case '*':
                    result = numberOne * numberTwo;
                    break;
                case '/':
                    result = numberOne / numberTwo;
                    break;
                case '^2':
                    result = numberTwo ** numberTwo;
                    break;
            }
            console.log(`Result: ${result}`);
            exit = "x";
            while (exit !== "yes" && exit !== "no") {
                exit = prompt(`Do you want to exit (yes/no): `)
            }
        }
    }
}



