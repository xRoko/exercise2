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

console.log(`Welcome to the Guess Number game.`);
console.log(`Rules: Try to guess a random number between 1 and 100 in the fewest possible attempts.`);
let number = Math.floor(Math.random() * 100) + 1;
let counter = 1;
let guess = parseInt(prompt(`What is your ${counter}. try: `));
while (guess !== number) {
    if (guess < number) {
        console.log(`Too low, try again.`)
        counter++;
        guess = parseInt(prompt(`What is your ${counter}. try:`));
    } else {
        console.log(`Too high, try again.`)
        counter++;
        guess = parseInt(prompt(`What is your ${counter}. try:`));
    }
}
console.log(`***VICTORY***\nYou found the number in ${counter} attempts!.`);