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

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPasswordStrength(password) {
    let score = 0;

    // Check for minimum length
    if (password.length >= 8) {
        score += 1;
    }

    // Check for numbers
    if (/\d/.test(password)) {
        score += 1;
    }

    // Check for special characters
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~-]/.test(password)) {
        score += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        score += 1;
    }

    if (score === 0) {
        return "Weak";
    } else if (score === 1 || score === 2) {
        return "Moderate";
    } else {
        return "Strong";
    }
}

function getPassword() {
    rl.question("Zadejte heslo: ", (password) => {
        const strength = checkPasswordStrength(password);
        console.log(`Síla hesla: ${strength}`);

        rl.question("Chcete zkontrolovat další heslo? (ano/ne): ", (answer) => {
            if (answer.toLowerCase() === "ano") {
                getPassword();
            } else {
                console.log("Ukončuji program.");
                rl.close();
            }
        });
    });
}

console.log("Kontrola síly hesla");
getPassword();
