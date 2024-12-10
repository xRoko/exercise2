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

let numbers = [0,1,2,3,4,5,6,7,8,9];
let upper = ["A","B","C","D","E","F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let special = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/",
    "`", "~"
];

let hasUpper = false;
let hasNumber = false;
let hasSpecial = false;
if (length < 8) {
    console.log(`Password too short. Minimum length is 8.`)
} else {
    let strength = 1;
    for (let letter of password) {
        numbers.forEach(number => {
            if (parseInt(letter) === number) {
                hasNumber = true;
            }
        });
    }
    for (let letter of password) {
        upper.forEach(char => {
            if (char === letter ) {
                hasUpper = true;
            }
        });
    }
    for (let letter of password) {
        special.forEach(char => {
            if (char === letter) {
                hasSpecial = true;
            }
        })
    }
    if (hasSpecial) {
        strength += 3;
    }
    if (hasNumber) {
        strength += 3;
    }
    if (hasUpper) {
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

