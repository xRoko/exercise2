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

console.log("Vitaj v hre 'Hádaj číslo'!");
console.log("Uhádni číslo medzi 1 a 10.");

const tajneCislo = Math.floor(Math.random() * 10) + 1;

let hadanie = false;

while (!hadanie) {
    let tip = parseInt(prompt("Zadaj svoj tip: "))

    if (tip === tajneCislo) {
        console.log(`Gratulujem! Uhádol si správne číslo ${tajneCislo}.`)
        hadanie = true;
    }else if (tip < tajneCislo) {
        console.log("Toto cislo je mensie, skus to znova.")
    }else if (tip > tajneCislo) {
        console.log("Toto cislo je vacsie, skus to znova.")
    }else {
        console.log("Neplatny vstup.Zadaj cislo");
    }
}
console.log("Gratulujem!Vyhral si.");