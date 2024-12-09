/*

Description: Create a terminal-based calendar application where users can assign names (e.g., birthdays, events) to specific dates.

Features:

View Calendar:

Display a simple calendar for the current month (e.g., dates 1–30 or 1–31).
Highlight dates with assigned names/events.
Assign Names to Dates:

Allow the user to input a date (e.g., 15) and a name/event (e.g., John's Birthday).
Store the date-name pairs.
View Assigned Dates:

Display a list of all dates with assigned names/events.
Remove Names from Dates:

Allow users to delete a name/event from a specific date.
Exit Program:

Save the data temporarily in memory for the session (or optionally write it to a file for persistence).
Focus:

Loops: For rendering the calendar and listing events.
Conditions: To validate user input (e.g., valid date range) and check if a date already has an assigned name.
*/

/*
EXAMPLE OUTPUT

Welcome to the Terminal Calendar!

1. View Calendar
2. Add Event
3. View All Events
4. Remove Event
5. Exit

Choose an option: 1

Calendar for December 2024:
1   2   3   4   5   6   7
8   9   10  11  12  13  14
15  16  17  18  19  20  21
22  23  24  25  26  27  28
29  30  31

Events: 
15 - John's Birthday
25 - Christmas Day
*/

const prompt = require('prompt-sync')();


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let udalosti = {};

function menu() {
    console.log("\n1. Zobrazit kalendář");
    console.log("2. Přidat událost");
    console.log("3. Zobrazit události");
    console.log("4. Odebrat událost");
    console.log("5. Ukončit program");

    rl.question("Vyber možnost: ", (odpoved) => {
        if (odpoved === "1") {
            console.log("\n=== Kalendář ===");
            for (let i = 1; i <= 31; i++) {
                if (udalosti[i]) {
                    console.log(`${i}. ${udalosti[i]} ⭐`);
                } else {
                    console.log(`${i}.`);
                }
            }
            menu();
        }
        if (odpoved === "2") {
            rl.question("Zadej datum (1-31): ", (datum) => {
                if (datum >= 1 && datum <= 31) {
                    rl.question("Zadej název události: ", (nazev) => {
                        udalosti[datum] = nazev;
                        console.log(`Událost "${nazev}" přidána k datu ${datum}.`);
                        menu();
                    });
                } else {
                    console.log("Neplatné datum!");
                    menu();
                }
            });
        }
        if (odpoved === "3") {
            console.log("\n=== Seznam událostí ===");
            let maUdalosti = false;
            for (let i = 1; i <= 31; i++) {
                if (udalosti[i]) {
                    console.log(`${i}. ${udalosti[i]}`);
                    maUdalosti = true;
                }
            }
            if (!maUdalosti) {
                console.log("Žádné události nejsou přiřazeny.");
            }
            menu();
        }
        if (odpoved === "4") {
            rl.question("Zadej datum k odstranění události (1-31): ", (datum) => {
                if (udalosti[datum]) {
                    console.log(`Událost "${udalosti[datum]}" byla odstraněna.`);
                    delete udalosti[datum];
                } else {
                    console.log("Na tomto datu žádná událost není.");
                }
                menu();
            });
        }
        if (odpoved === "5") {
            console.log("Program ukončen. Nashledanou!");
            rl.close();
        }
        if (odpoved !== "1" && odpoved !== "2" && odpoved !== "3" && odpoved !== "4" && odpoved !== "5") {
            console.log("Neplatná volba, zkus to znovu.");
            menu();
        }
    });
}

console.log("Vítejte v jednoduchém kalendáři!");
menu();
