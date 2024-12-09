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

console.log("Vytvorte si heslo.")
console.log("Heslo musí obsahovať aspoň 8 znakov, číslo, špeciálny znak, veľké písmeno.")

let hesloJeSpravne = false;

while (!hesloJeSpravne) {
    let heslo = prompt("Zadaj svoje nove heslo: ");

    let dlzkaOk = false;
    let obsahujeCislo = false;
    let obsahujeSpecZnaka = false;
    let obsahujeVelkePis = false;

    let i = 0;
    while (i < heslo.length) {
        let znak = heslo[i];
        if (heslo.length >= 8) dlzkaOk = true;
        if (znak > '0' &&  znak <= '9') obsahujeCislo = true;
        if ("!@#$%^&*(),.?\":{}|<>".includes(znak)) obsahujeSpecZnaka = true;
        if (znak > 'A' && znak <= 'Z') obsahujeVelkePis = true;
        i++
    }

    hesloJeSpravne = dlzkaOk && obsahujeCislo && obsahujeSpecZnaka && obsahujeVelkePis;

    if(!hesloJeSpravne) {
        console.log("Heslo nesplna poziadavky skus to znova.");
    }

}

console.log("Heslo je spravne")