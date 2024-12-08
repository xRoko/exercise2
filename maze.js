/*

Description: Create a text-based maze game where the player moves through a grid.

Features:
Represent the maze as a 2D array.
Allow movement (w, a, s, d for up, left, down, right).
Display the player's current position.
End the game when the player reaches the goal.
Focus: Use nested loops to render the maze and conditions to check for valid moves.

*/

const prompt = require('prompt-sync')();
console.log("Hello, Welcome to the Terminal maze game!");
console.log("Your goal is to find the way out of the maze, you start at the S.");
console.log("To move use: w - up, a - left, s - down, a - right");
console.log("To exit type: exit\n");

let maze = [
    ["##", "E ", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "  ", "##", "  ", "  ", "  ", "  ", "##", "##", "##"],
    ["##", "  ", "##", "  ", "##", "##", "  ", "##", "##", "##"],
    ["##", "  ", "  ", "  ", "##", "##", "  ", "  ", "  ", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "  ", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "  ", "##"],
    ["##", "  ", "  ", "  ", "  ", "  ", "##", "##", "  ", "##"],
    ["##", "  ", "##", "##", "##", "  ", "##", "##", "  ", "##"],
    ["##", "  ", "##", "##", "##", "  ", "  ", "  ", "  ", "##"],
    ["##", "S ", "##", "##", "##", "##", "##", "##", "##", "##"]
];

let road = [
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##"],
    ["##", "S ", "##", "##", "##", "##", "##", "##", "##", "##"]
];



let row = 9;
let column = 1;
let moves = ["w","a","s","d"];
let move = "Your move"
while (move !== "exit") {
    for (let row of road) {
        for (let letter of row) {
            process.stdout.write(letter + "");
        }
        console.log();
    }
    console.log();
    move = prompt(`Enter your next move or give up: `);
    if (moves.includes(move) ) {
        switch (move) {
            case "w":
                if (maze[row - 1][column] === "  ") {
                    road[row - 1][column] = "S ";
                    road[row][column] = "  ";
                    row -= 1;
                } else if (maze[row - 1][column] === "E ") {
                    console.log("\n*******You Won!*******")
                    move = "exit";
                } else {
                    console.log(`\n******* Wrong way, try again. *******`)
                }
                break;
            case "s":
                if (maze[row + 1][column] === "  ") {
                    road[row + 1][column] = "S ";
                    road[row][column] = "  ";
                    row += 1;
                } else if (maze[row + 1][column] === "E ") {
                    console.log("\n*******You Won!*******")
                    move = "exit";
                } else {
                    console.log(`\n******* Wrong way, try again. *******`)
                }
                break;
            case "a":
                if (maze[row][column - 1] === "  ") {
                    road[row][column - 1] = "S ";
                    road[row][column] = "  ";
                    column -= 1;
                } else if (maze[row][column - 1] === "E ") {
                    console.log("\n*******You Won!*******")
                    move = "exit";
                } else {
                    console.log(`\n******* Wrong way, try again. *******`)
                }
                break;
            case "d":
                if (maze[row][column + 1] === "  ") {
                    road[row][column + 1] = "S ";
                    road[row][column] = "  ";
                    column += 1;
                } else if (maze[row][column + 1] === "E ") {
                    console.log("\n*******You Won!*******")
                    move = "exit";
                }
                else {
                    console.log(`\n******* Wrong way, try again. *******`)
                }
                break;
        }
    } else {
        console.log("Use w, a, s, d to move or type exit to quit. ")
    }
}