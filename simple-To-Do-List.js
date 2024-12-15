/*
Description: Build a terminal-based to-do list app.

Features:
Add tasks.
View all tasks.
Mark tasks as done or remove them.
Focus: Use loops for displaying tasks and conditions for actions (e.g., checking if the task list is empty before showing tasks).
*/

const prompt = require('prompt-sync')();
console.log(`Hi, welcome to the To Do List!`)

function menu() {
    console.log(`MAIN MENU`);
    console.log(`1. Add tasks\n2. View all tasks\n3. Change tasks status\n4. Remove tasks\n5. Exit`);

    let menuOption = parseInt(prompt(`Choose an option: `));
    while (isNaN(menuOption) || menuOption < 1 || menuOption > 5) {
        menuOption = parseInt(prompt(`Choose an option (1 - 5): `));
    }

    if (menuOption === 1) {
        console.log();
        addTasks();
        return true;
    } else if (menuOption === 2) {
        console.log();
        viewTasks();
        return true;
    } else if (menuOption === 3) {
        console.log();
        statusTasks();
        return true;
    } else if (menuOption === 4) {
        console.log();
        removeTasks();
        return true;
    } else {
        return false;
    }
}

function addTasks() {
    console.log(`ADD TASKS`);
    let task = [];
    task[0] = prompt(`Enter new task: `);
    task[1] = "To do";
    tasks.push(task);
    console.log();
}

function viewTasks() {
    console.log(`VIEW TASKS`);
    if (tasks.length === 0) {
        console.log(`No tasks to show yet`);
    } else {
        let index = 1;
        for (let task of tasks) {
            console.log(`${index}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        console.log();
    }
}

function statusTasks() {
    console.log(`CHANGE TASKS STATUS`);
    if (tasks.length === 0) {
        console.log(`No tasks to show yet`);
    } else {
        let index = 0;
        for (let task of tasks) {
            console.log(`${index + 1}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        let changeTask = parseInt(prompt(`Choose a task to change status: `));
        while (isNaN(changeTask) || changeTask < 1 || changeTask > index) {
            changeTask = parseInt(prompt(`Choose a task to change status (1 - ${index}): `));
        }
        tasks[changeTask - 1][1] = prompt(`Enter new status: `);
        console.log();
    }
}

function removeTasks() {
    console.log(`REMOVE TASKS`);
    if (tasks.length === 0) {
        console.log(`No tasks to show yet`);
    } else {
        let index = 0;
        for (let task of tasks) {
            console.log(`${index + 1}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        let removeTask = parseInt(prompt(`Choose a task to remove: `));
        while (isNaN(removeTask) || removeTask < 1 || removeTask > index) {
            removeTask = parseInt(prompt(`Choose a task to remove (1 - ${index}): `));
        }
        tasks.splice(removeTask - 1, 1);
    }
    console.log();
}


// Application
let tasks = [];
let appRun = true;
while (appRun) {
    appRun = menu();
}