/*

Description: Develop a tool to check the strength of a password.

Features:
Prompt the user to enter a password.
Check for:
Minimum length.
Presence of numbers.
Special characters.
Uppercase letters.
Output a strength score or message ("Weak," "Moderate," "Strong").
Focus: Use conditions to validate different password criteria and loops to analyze the string.

Popis: Vyvinout nástroj pro kontrolu síly hesla.

Vlastnosti:
Vyzvěte uživatele k zadání hesla.
Zkontrolujte:
Minimální délka.
Přítomnost čísel.
Speciální znaky.
Velká písmena.
Zadejte skóre síly nebo zprávu („Slabá“, „Střední“, „Silná“).
Zaměření: Použijte podmínky k ověření různých kritérií hesla a smyček pro analýzu řetězce.
*/

const prompt = require('prompt-sync')();

let password = prompt("Napis heslo ");

// kontrola delky hesla
       if(password.length > 13) {
          console.log("velmi sylné heslo");
       } else  if (password.length >= 4 && password.length >= 8 && password.length <= 13) {
           console.log("Silne heslo");{
           }
           } else {
           console.log("Stredni heslo");{
           }
           } else {
           console.log("Slabé heslo");{
           }





}

