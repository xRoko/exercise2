/*

Description: Create a text-based maze game where the player moves through a grid.

Features:
Represent the maze as a 2D array.
Allow movement (w, a, s, d for up, left, down, right).
Display the player's current position.
End the game when the player reaches the goal.
Focus: Use nested loops to render the maze and conditions to check for valid moves.

*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#']
];

const player = {
    x: 1,
    y: 1
};

const goal = {
    x: 6,
    y: 6
};

function renderMaze() {
    for (let y = 0; y < maze.length; y++) {
        let row = "";
        for (let x = 0; x < maze[y].length; x++) {
            if (x === player.x && y === player.y) {
                row += 'P';
            } else if (x === goal.x && y === goal.y) {
                row += 'G';
            } else {
                row += maze[y][x];
            }
        }
        console.log(row);
    }
}

function movePlayer(direction) {
    switch (direction) {
        case 'w':
            if (maze[player.y - 1][player.x] !== '#') {
                player.y--;
            }
            break;
        case 'a':
            if (maze[player.y][player.x - 1] !== '#') {
                player.x--;
            }
            break;
        case 's':
            if (maze[player.y + 1][player.x] !== '#') {
                player.y++;
            }
            break;
        case 'd':
            if (maze[player.y][player.x + 1] !== '#') {
                player.x++;
            }
            break;
        default:
            console.log("Neplatný pohyb.");
            break;
    }
}

function checkWin() {
    return player.x === goal.x && player.y === goal.y;
}

function playGame() {
    renderMaze();

    rl.question("Zadejte směr pohybu (w, a, s, d): ", (direction) => {
        movePlayer(direction);

        if (checkWin()) {
            console.log("Gratulujeme, dosáhli jste cíle!");
            rl.close();
        } else {
            playGame();
        }
    });
}

console.log("Vítejte v bludišti!");
playGame();

