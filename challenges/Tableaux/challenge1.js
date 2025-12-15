const prompt = require('prompt-sync')();

let array = [];
for (let i = 1; i <= 5; i++) {
    const entier = Number(prompt('Entrer un entier : '));
    array.push(entier);
}

console.log("array:", array);

let inverse = [...array].reverse();  
console.log("inverse:", inverse);
