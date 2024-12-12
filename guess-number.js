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

let randomNumber = 57;
let guess = 0;

console.log("Guess the number from 1 to 100!");

while (guess !== randomNumber) {
    guess = parseInt(prompt("Type your number: "));

    if (guess < randomNumber) {
        console.log("Your number is too small. Try again. ");
    } else if (guess > randomNumber) {
        console.log("Your number is too big.Try again.");
    } else {
        console.log(`Congratulations! You guessed the number ${randomNumber}!`);
    }
}