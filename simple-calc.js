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

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function kalkulator() {
    rl.question("Zadej první číslo: ", (cislo1) => {
        let a = parseFloat(cislo1);

        rl.question("Zadej operaci (+, -, *, /, ^2, sqrt, konec): ", (operace) => {

            if (operace === "konec") {
                console.log("Konec programu. Nashledanou!");
                rl.close();
                return;
            }

            if (operace === "^2") {
                console.log(`Výsledek: ${a * a}`);
                return kalkulator();
            }
            if (operace === "sqrt") {
                console.log(a >= 0 ? `Výsledek: ${Math.sqrt(a)}` : "Nelze odmocnit záporné číslo!");
                return kalkulator();
            }

            rl.question("Zadej druhé číslo: ", (cislo2) => {
                let b = parseFloat(cislo2);
                let vysledek = 0;

                if (operace === "+") vysledek = a + b;
                else if (operace === "-") vysledek = a - b;
                else if (operace === "*") vysledek = a * b;
                else if (operace === "/") vysledek = b !== 0 ? a / b : "Dělení nulou není možné!";
                else console.log("Neplatná operace!");

                console.log(`Výsledek: ${vysledek}`);
                kalkulator();
            });
        });
    });
}

console.log("Vítejte v kalkulátoru! Použij operace: +, -, *, /, ^2, sqrt, konec.");
kalkulator();

