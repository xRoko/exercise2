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

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let bludiste = [
    ["S", ".", ".", ".", "."],
    ["#", "#", ".", "#", "#"],
    [".", ".", ".", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "C", ".", ".", "#"]
];

let hracRadek = 0;
let hracSloupec = 0;


function zobrazitBludiste() {
    for (let i = 0; i < bludiste.length; i++) {
        let radek = "";
        for (let j = 0; j < bludiste[i].length; j++) {
            if (i === hracRadek && j === hracSloupec) {
                radek += "S ";
            } else {
                radek += bludiste[i][j] + " ";
            }
        }
        console.log(radek);
    }
    console.log("Použij klávesy: w (nahoru), a (vlevo), s (dolů), d (vpravo)");
}


function pohybHrace(smer) {
    let novyRadek = hracRadek;
    let novySloupec = hracSloupec;

    if (smer === "w") novyRadek--;
    if (smer === "s") novyRadek++;
    if (smer === "a") novySloupec--;
    if (smer === "d") novySloupec++;


    if (
        novyRadek >= 0 &&
        novyRadek < bludiste.length &&
        novySloupec >= 0 &&
        novySloupec < bludiste[0].length &&
        bludiste[novyRadek][novySloupec] !== "#"
    ) {
        hracRadek = novyRadek;
        hracSloupec = novySloupec;
    } else {
        console.log("Tam nemůžeš jít, je tam zeď!");
    }


    if (bludiste[hracRadek][hracSloupec] === "C") {
        console.log("Gratulujeme! Dorazil jsi do cíle!");
        rl.close();
    } else {
        hratDalsiTah();
    }
}


function hratDalsiTah() {
    zobrazitBludiste();
    rl.question("Kam se chceš pohnout? ", (odpoved) => {
        if (odpoved === "w" || odpoved === "a" || odpoved === "s" || odpoved === "d") {
            pohybHrace(odpoved);
        } else {
            console.log("Použij pouze klávesy w, a, s nebo d.");
            hratDalsiTah();
        }
    });
}


console.log("Vítej ve hře bludiště!");
console.log("Tvůj cíl je dostat se do C (cíle). Začínáš na S (start).");
hratDalsiTah();
