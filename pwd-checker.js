/*

Description: Develop a tool to check the strength of a password.

Features:
Prompt the user to enter a password.
Check for:
Minimum length.
Presence of numbers.
Special characters.
Uppercase letters.
Output a strength score or message ("Weak," "Moderate," "Strong").
Focus: Use conditions to validate different password criteria and loops to analyze the string.

*/

const prompt = require('prompt-sync')();
console.log(`Welcome to the Password Strength Checker.`)

let length = 0;
let password;
while (length === 0) {
    password = prompt('Enter your password:');
    length = password.length;
}

if (length < 8) {
    console.log(`Password too short. Minimum length is 8.`)
} else {
     let strength = 1;
    let hasNumbers = /\d/.test(password);
    if (hasNumbers) {
        strength += 3;
    }
    let hasUpper = /[A-Z]/.test(password);
    if (hasUpper) {
        strength += 3;
    }
    let hasSpecial = /[^a-zA-Z0-9]/.test(password);
    if (hasSpecial) {
        strength += 3;
    }
    switch (strength) {
        case 1:
            console.log(`${password} is Super Weak!`);
            break;
        case 4:
            console.log(`${password} is Weak!`);
            break;
        case 7:
            console.log(`${password} is Moderate!`);
            break;
        case 10:
            console.log(`${password} is Strong!`);
            break;
    }
}

