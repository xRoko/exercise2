/*

Description: Create a game where the user guesses a random number between 1 and 100.

Features:
Generate a random number using Math.random().
Allow the user to input guesses in the terminal.
Provide hints ("too high" or "too low").
End the game when the user guesses correctly.
Focus: Loops for repeated guesses and conditions for providing hints.

Popis: Vytvořte hru, ve které uživatel uhodne náhodné číslo mezi 1 a 100.

Vlastnosti:
Vygenerujte náhodné číslo pomocí Math.random().
Umožněte uživateli zadávat odhady do terminálu.
Poskytněte rady („příliš vysoké“ nebo „příliš nízké“).
Ukončete hru, když uživatel uhodne správně.
Zaměření: Smyčky pro opakované odhady a podmínky pro poskytování nápověd.
*/

const prompt = require('prompt-sync')();

let cislo = prompt('Napis nějaké cislo? ');
let number = Math.ceil(Math.random() *100);


    console.log(`Vygerované cislo: ${number}`);

    console.log(`"Tvoje cislo je:"${cislo} a vygerovane je: ${number}`)
{



}

    console.log("Špatně! Zkus znovu!");{



    }

