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
let events = [
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ],
    [
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""], [""], [""], [""], [""], [""], [""], [""], [""], [""],
        [""]
    ]
];


function menu() {
    console.log(`MAIN MENU`)
    console.log(`1. View Calendar\n2. Add Event\n3. View events\n4. Remove event\n5. Exit`);
    let option = parseInt(prompt(`Choose an option: `));
    while (isNaN(option) || option <= 0 || option > 5) {
        option = parseInt(prompt(`Choose an option (1 - 5): `));
    }
    if (option === 1) {
        console.log();
        viewCalendar();
        return true;
    } else if (option === 2) {
        console.log();
        addEvent();
        return true;
    }
    else if (option === 3) {
        console.log();

        viewEvents();
        return true;
    } else if (option === 4) {
        console.log();
        removeEvent();
        return true;
    } else {
        return false;
    }
}

function viewCalendar() {
    console.log(`VIEW CALENDAR`);
    let month;
    month = parseInt(prompt(`Choose month (1 - 12): `));
    while (isNaN(month) || month <=0 || month > 12) {
        month = parseInt(prompt(`Choose month (1 - 12): `));
    }
    process.stdout.write(`Calendar for ${months[month - 1]} 2024:`);
    for (let i = 0; i < daysInMonth[month - 1]; i++) {
        if (i % 7 === 0) {
            console.log();
            process.stdout.write(`${i + 1} `);
        } else if (i < 10) {
            process.stdout.write(` ${i + 1} `);
        } else {
            process.stdout.write(`${i + 1} `);
        }
    }
    console.log(`\n`);
}

function addEvent() {
    console.log(`ADD NEW EVENT`);
    let newEvent = prompt(`New event: `);
    let newEventMonth = parseInt(prompt(`New event month: `));
    while (isNaN(newEventMonth) || newEventMonth <= 0 || newEventMonth > 12) {
        newEventMonth = parseInt(prompt(`New event month (1 - 12): `));
    }
    let newEventDay = parseInt(prompt(`New event day: `));
    while (isNaN(newEventDay) || newEventDay <= 0 || newEventDay > daysInMonth[newEventMonth - 1]) {
        newEventDay = parseInt(prompt(`New event day ( 1 - ${daysInMonth[newEventMonth - 1]}): `));
    }
    if (events[newEventMonth - 1][newEventDay - 1][0] === "") {
        events[newEventMonth - 1][newEventDay - 1][0] = newEvent;
    } else {
        events[newEventMonth - 1][newEventDay - 1].push(newEvent);
    }
    console.log();
}

function viewEvents() {
    console.log(`VIEW EVENTS`);
    let viewEvents = prompt(`To view events choose a month (1 - 12) or type all: `);
    if (viewEvents === "all") {
        let indexMonth = 0;
        for (let month of events) {
            indexMonth++;
            let indexDay = 0;
            for (let day of month) {
                indexDay++;
                if (day[0] !== "") {
                    for (let event of day) {
                        console.log(`${indexDay}.${indexMonth} - ${event}.`);
                    }
                }
            }
        }
    } else if (viewEvents >= 1 && viewEvents <= 12) {
        let indexDay = 0;
        for (let day of events[viewEvents - 1]) {
            indexDay++;
            if (day[0] !== "") {
                for (let event of day) {
                    console.log(`${indexDay}.${viewEvents} - ${event}.`);
                }
            }
        }
    }
    console.log();
}

function removeEvent() {
    console.log(`REMOVE EVENTS`);
    console.log(`To delete an event, select date: `)
    let deleteMonth = parseInt(prompt(`Choose month (1 - 12): `));
    while (isNaN(deleteMonth) || deleteMonth <=0 || deleteMonth > 12) {
        deleteMonth = parseInt(prompt(`Choose month (1 - 12): `));
    }
    let deleteDay = parseInt(prompt(`Choose day (1 - ${daysInMonth[deleteMonth - 1]}): `));
    while (isNaN(deleteDay) || deleteDay <=0 || deleteDay > daysInMonth[deleteMonth - 1]) {
        deleteDay = parseInt(prompt(`Choose day (1 - ${daysInMonth[deleteMonth - 1]}): `));
    }

    if (events[deleteMonth - 1][deleteDay - 1][0] === "") {
        console.log(`No events for selected date.`);
    } else if (events[deleteMonth - 1][deleteDay - 1].length > 1) {
        console.log(`There is more than one event for this day, select one to delete: `);
        let index = 0;
        for (let event of events[deleteMonth - 1][deleteDay - 1]) {
            index++;
            console.log(`${index}) ${event}.`);
        }
        let deleteIndex = parseInt(prompt(`Choose event to delete: `));
        while (isNaN(deleteIndex) || deleteIndex <=0 || deleteIndex > index) {
            deleteIndex = parseInt(prompt(`Choose event to delete (1 - ${index}): `));
        }
        events[deleteMonth - 1][deleteDay - 1].splice(deleteIndex - 1, 1);
    } else {
        events[deleteMonth - 1][deleteDay - 1][0] = "";
    }
    console.log();
}

// Application Terminal Calendar
let daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(`Welcome to the Terminal Calendar!`);
let appRun = true;
while (appRun) {
    appRun = menu();
}



