const prompt = require('prompt-sync')();

let newNumber = true;

while (newNumber) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let userGuess = 0;
    let bid = 0;


    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt('Guess the random number between 1 and 100: '), 10);
        bid++;

        if (isNaN(userGuess)) {
            console.log('Please enter a valid number.');

        } else if (userGuess < randomNumber) {
            console.log('Your guess is too low. Try again.');

        } else if (userGuess > randomNumber) {
            console.log('Your guess is too high. Try again.');

        } else {
            console.log(`Congratulations! You've guessed the correct number: ${randomNumber}`);
            console.log('');
            console.log(`It took you ${bid} attempts.`);
        }
    }
    let userChoice = prompt('Do you want to continue? y/n: ').toLowerCase();
    if (userChoice !== 'y') {
        newNumber = false;
        console.log('Gameover !!! Goodbye!');
    } else {
        console.log('');
        console.log('Starting new game !!!');
    }
}