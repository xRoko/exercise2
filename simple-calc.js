/*

Description: Build a calculator that takes user input for basic operations.

Features:
Ask the user to input two numbers and an operator (+, -, *, /, ^2, abs, sqrt).
Perform the calculation and display the result.
Ask if the user wants to perform another calculation or exit.
Focus: Conditionals for operator selection and loops for repeated use.

Extra task: Create a calculator which is able to calculate quadratic equation e.x.: x^2 + x + 1 = 0

Popis: Sestavte si kalkulačku, která přebírá uživatelské vstupy pro základní operace.

Vlastnosti:
Požádejte uživatele, aby zadal dvě čísla a operátor (+, -, *, /, ^2, abs, sqrt).
Proveďte výpočet a zobrazte výsledek.
Zeptejte se, zda chce uživatel provést další výpočet nebo ukončit.
Zaměření: Podmínky pro výběr operátora a smyčky pro opakované použití.

Extra úkol: Vytvořte kalkulačku, která dokáže vypočítat kvadratickou rovnici např.: x^2 + x + 1 = 0
*/

const prompt = require('prompt-sync')();




let firstNumber = Number(prompt("Zadej první cislo "));
let secondNumber = Number(prompt("Zadej druhe cislo "));
let sing = prompt("Zadej + - * / ");

// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);

if (sing == "+") {
    console.log(`${firstNumber + secondNumber}`);
   } else if (sing == "-") {
    console.log(`${firstNumber - secondNumber}`);
   } else if (sing == "*") {
    console.log(`${firstNumber * secondNumber}`);
   } else if (sing == "/") {
    console.log(`${firstNumber / secondNumber}`);


   } else {
    console.log("Tuto matematickou operaci nezna");


}






























