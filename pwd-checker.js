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
const password = prompt("Enter a password to check its strength: ");

let score = 0;

if (password.length >= 8) {
    score += 1;
}

let hasDigit = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true;
        break;
    }
}
if (hasDigit) {
    score += 1;
}

let hasSpecialChar = false;
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '?', '/', '~', '`'];
for (let i = 0; i < password.length; i++) {
    if (specialChars.includes(password[i])) {
        hasSpecialChar = true;
        break;
    }
}
if (hasSpecialChar) {
    score += 1;
}

let hasUpperCase = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
        hasUpperCase = true;
        break;
    }
}
if (hasUpperCase) {
    score += 1;
}

let strength;
if (score === 4) {
    strength = "Strong";
} else if (score === 3) {
    strength = "Moderate";
} else {
    strength = "Weak";
}

console.log(`Password strength: ${strength}`);