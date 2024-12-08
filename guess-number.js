const prompt = require('prompt-sync')();
/*
Description: Create a game where the user guesses a random number between 1 and 100.

Features:
Generate a random number using Math.random().
Allow the user to input guesses in the terminal.
Provide hints ("too high" or "too low").
End the game when the user guesses correctly.
Focus: Loops for repeated guesses and conditions for providing hints.  */

let random = Math.ceil(Math.random() * 100);
//console.log(random);

let guess = parseInt(prompt('Enter a guess (integer):'));

while (guess !== random) {
    if (isNaN(guess)) {
        console.log("Hey, input an integer please!")} else {
        if (guess < random) {
            console.log("Your guess is lower than the random number.")
        } else {
            console.log("Your guess is higher than the random number.")
        };
    };
    guess = parseInt(prompt('Enter a guess (integer):'));
};
console.log(`GOOD JOB! You guessed the number correctly! The number was ${random}.`);