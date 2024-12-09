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


let passwordValidation = false;

while (!passwordValidation) {
    const str = prompt('Please, enter password: ');


    console.log('');


    const qty = str.length;
    const hasLowercase = /[a-z]/.test(str);
    const hasUppercase = /[A-Z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const hasOnlyNumber = /^[0-9]+$/.test(str);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(str);

    if (hasOnlyNumber) {
        console.log(`The password consist of numbers only !!!`);

    } else if (parseInt(qty) < 8) {
        console.log(`Password '${str}' is weak !!! must have more than 8 characters`);

    } else if (parseInt(qty) >= 8 && hasLowercase && hasUppercase && hasNumber && hasSpecialCharacter) {
        passwordValidation = true;
        console.log(`You're succesful!!! Password '${str}' is Strong !!!`);


    } else if (parseInt(qty) >= 8 && (hasLowercase || hasUppercase || hasSpecialCharacter) && hasNumber) {
        console.log(`Password '${str}' is Medium !!!`);

    } else {
        console.log(`Password '${str}' is Weak! It must include uppercase, lowercase, numbers and special characters.`);
        passwordValidation = false;
    }

}

