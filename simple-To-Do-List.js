/*
Description: Build a terminal-based to-do list app.

Features:
Add tasks.
View all tasks.
Mark tasks as done or remove them.
Focus: Use loops for displaying tasks and conditions for actions (e.g., checking if the task list is empty before showing tasks).
*/



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function displayMenu() {
    console.log("\n--- To-Do List ---");
    console.log("1. Přidat úkol");
    console.log("2. Zobrazit úkoly");
    console.log("3. Označit úkol jako hotový");
    console.log("4. Odebrat úkol");
    console.log("5. Ukončit program");
    console.log("------------------");
}

function addTask() {
    rl.question("Zadejte nový úkol: ", (task) => {
        tasks.push({ text: task, done: false });
        console.log("Úkol přidán.");
        menu();
    });
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Seznam úkolů je prázdný.");
    } else {
        console.log("\n--- Seznam úkolů ---");
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            console.log(`${i + 1}. ${task.text} ${task.done ? '(Hotovo)' : ''}`);
        }
    }
    menu();
}

function markTaskAsDone() {
    if (tasks.length === 0) {
        console.log("Seznam úkolů je prázdný.");
    } else {
        viewTasks();
        rl.question("Zadejte číslo úkolu, který chcete označit jako hotový: ", (index) => {
            const taskIndex = parseInt(index) - 1;
            if (taskIndex >= 0 && taskIndex < tasks.length) {
                tasks[taskIndex].done = true;
                console.log("Úkol označen jako hotový.");
            } else {
                console.log("Neplatné číslo úkolu.");
            }
            menu();
        });
    }
}

function removeTask() {
    if (tasks.length === 0) {
        console.log("Seznam úkolů je prázdný.");
    } else {
        viewTasks();
        rl.question("Zadejte číslo úkolu, který chcete odstranit: ", (index) => {
            const taskIndex = parseInt(index) - 1;
            if (taskIndex >= 0 && taskIndex < tasks.length) {
                tasks.splice(taskIndex, 1);
                console.log("Úkol odstraněn.");
            } else {
                console.log("Neplatné číslo úkolu.");
            }
            menu();
        });
    }
}

function menu() {
    displayMenu();
    rl.question("Vyberte akci: ", (choice) => {
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                markTaskAsDone();
                break;
            case "4":
                removeTask();
                break;
            case "5":
                console.log("Ukončuji program.");
                rl.close();
                break;
            default:
                console.log("Neplatná volba. Zkuste znovu.");
                menu();
        }
    });
}

console.log("Vítejte v aplikaci To-Do List!");
menu();


