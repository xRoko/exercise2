/*

Description: Create a game where the user guesses a random number between 1 and 100.

Features:
Generate a random number using Math.random().
Allow the user to input guesses in the terminal.
Provide hints ("too high" or "too low").
End the game when the user guesses correctly.
Focus: Loops for repeated guesses and conditions for providing hints.

*/

const prompt = require('prompt-sync')();


const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const nahodneCislo = Math.floor(Math.random() * 100) + 1;


let hadani = 0;

console.log("Hádej číslo od 1 do 100. Zadej svůj tip!");


function ziskejTip() {
    rl.question("Tvůj tip: ", (vstup) => {
        hadani = parseInt(vstup); // Převedení vstupu na číslo


        if (isNaN(hadani)) {
            console.log("Prosím, zadej platné číslo.");
            ziskejTip();
        } else if (hadani < nahodneCislo) {
            console.log("Příliš nízko! Zkus to znovu.");
            ziskejTip();
        } else if (hadani > nahodneCislo) {
            console.log("Příliš vysoko! Zkus to znovu.");
            ziskejTip();
        } else {
            console.log(`Gratuluji! Uhodl jsi správné číslo: ${nahodneCislo}`);
            rl.close();
        }
    });
}


ziskejTip();
