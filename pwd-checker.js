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

// necessities
let minLength = 5;

// app launch
console.log("This is a password strength checker app. After prompted, enter your password.\n" +
    "The rules are following:\n" +
    "- Ideal minimum length: 5 characters\n" +
    "- May contain at least 1 number\n" +
    "- May contain at least 1 special character\n" +
    "- May contain at least 1 uppercase letter\n");

//infinite loop for pw check
while(true) { //makes loop run until i write break
    let pwStr = 0;
    let pw = prompt("Please enter your password:");

//min length check
    if (pw.length >= minLength) {
        pwStr++
    };

// number check
    const containsNumber = (str) => /\d/.test(str); // Checks for at least one digit, /d is like 0-9
    if (containsNumber(pw)) {
        pwStr++
    };

// special char check
    const containsSpecial = (str) => /[!@#$%^&*(),.?":{}/|\<>]/.test(str);
    if (containsSpecial(pw)) {
        pwStr++
    };

// uppercase check
    const containsUpper = (str) => /[A-Z]/.test(str);
    if (containsUpper(pw)) {
        pwStr++
    };

    if (pwStr >= 3) {
        console.log("Your password is Strong! Well done.");
        break
    } else if (pwStr == 2) {
        console.log("Your password is Moderate! To make it Strong, make sure it's longer than 5 characters, and contains at least one number, uppercase letter or special character.");
    } else {
        console.log("Your password is Weak! Try making it longer than 5 characters, and/or adding at least one number, uppercase letter or special character.");
    }
}