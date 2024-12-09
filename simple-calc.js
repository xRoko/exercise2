/*

Description: Build a calculator that takes user input for basic operations.

Features:
Ask the user to input two numbers and an operator (+, -, *, /, ^2, abs, sqrt).
Perform the calculation and display the result.
Ask if the user wants to perform another calculation or exit.
Focus: Conditionals for operator selection and loops for repeated use.

Extra task: Create a calculator which is able to calculate quadratic equation e.x.: x^2 + x + 1 = 0
*/

const prompt = require('prompt-sync')();

console.log("Ahoj, matematik, pomôžem ti vypočítať tvoje príklady");

let pokracovanie = 'Ano';

while (pokracovanie === 'Ano') {
    let prveCislo = parseFloat(prompt("Zadaj prve cislo:"));
    let operator = prompt('Zadaj operator (+,-,*,/,^2,abs pre absolutnu hodnotu,sqrt pre odmocninu):');
    let druheCislo = null;
    if (['+', '-', '*', '/'].includes(operator)) {
        druheCislo = parseFloat(prompt('Zadaj druhe cislo:'));
    }
    if (operator === '+') {
        let scitanie = prveCislo + druheCislo;
        console.log(`Vysledok: ${prveCislo} + ${druheCislo} = ${scitanie}`);
    } else if (operator === '-') {
        let odcitanie = prveCislo - druheCislo;
        console.log(`Vysledok: ${prveCislo} - ${druheCislo} = ${odcitanie}`);
    } else if (operator === '*') {
        let nasobenie = prveCislo * druheCislo;
        console.log(`Vysledok: ${prveCislo} * ${druheCislo} = ${nasobenie}`);
    } else if (operator === '/') {
        if (druheCislo === 0) {
            console.log('Chyba: Delenie nulou nie je povolene.');
        } else {
            let delenie = prveCislo / druheCislo;
            console.log(`Vysledok: ${prveCislo} / ${druheCislo} = ${delenie}`);
        }
    } else if (operator === '^2') {
        let na2 = prveCislo ** 2;
        console.log(`Vysledok: ${prveCislo} ** 2 = ${na2}`);
    } else if (operator === 'abs') {
        let abs = Math.abs(prveCislo);
        console.log(`Vysledok: |${prveCislo}| = ${abs}`);
    } else if (operator === 'sqrt') {
        if (prveCislo < 0) {
            console.log('Chyba: Odmocnina zo záporného čísla nie je povolená.');
        } else {
            let sqrt = Math.sqrt(prveCislo);
            console.log(`Vysledok: √${prveCislo} = ${sqrt}`);
        }
    } else {
        console.log('Neplatný operátor. Skús to znova.');
    }

    console.log(pokracovanie = prompt("Praješ si pokračovať v počítaní? (Ano/Nie):")) ;
}

console.log("Tak Ahoj!");