//NOTE - Imports
import readlineSync from "readline-sync";

//SECTION - Week 1 Lab
const inputName = readlineSync.question("What is your name? ");
const num1 = 3;
const num2 = 10;

console.log(`Hello ${inputName}! Welcome to week 1 lab!`);
console.log(num1 + num2);

const inputReply = readlineSync.question(`Enter your reply ${inputName}:`);
console.log(inputReply);

if (inputReply.length > 10) {
    console.log("Wow, such a long response!");
} else {
    console.log("Nice and concise!");
}

let meals = ["dinner", "breakfast", "lunch"];

console.log(meals[0]);
console.log(meals[1]);
console.log(meals[2]);

meals[3] = "dinner";

console.log(meals[3]);

let userInput = [];
let index = 0;

while (index < 3) {
    userInput[index] = readlineSync.question("Enter an array item: ");
    index = index + 1;
}

console.log(userInput);
console.log(`hello ${userInput}, you did this on the 7/10/25`);
//!SECTION - End Week 1 Lab