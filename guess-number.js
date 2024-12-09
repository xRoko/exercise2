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

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Vítej ve hře");
console.log("Hádej číslo od 1 do 100");
console.log("Pokud to dáš na druhý pokus, jseš největší borec!");

let pokus = 1;

while (true) {

    let input;

    if (pokus === 1) {
        input = prompt("Tak pojď - pokus první: ");

        if (pokus === 2) {
            console.log("Ty si vážně borec!");h
        }

    } else {
        input = prompt(`Tak pojď - pokus číslo ${pokus}: `);
    }

    let hrac = parseInt(input, 10);

    if (isNaN(hrac)) {

        console.log("Prosím, zadej platné číslo!");
        continue;
    }

    if (hrac === randomNumber) {

        console.log(`Bravo!!! Uhodl jsi správné číslo na pokus číslo ${pokus}!`);
        break; //

    } else if (hrac > randomNumber) {
        console.log("Je to příliš vysoké.");

    } else {
        console.log("Je to hodně nízké, ty joudo.");
    }

    if (pokus === 5) {
        console.log("Ty seš ale kopyto!");
    }

    pokus++;
}




