const prompt = require('prompt-sync')();

let table = [];

for (let i = 0; i < 3; i++) {
    let nbr = Number(prompt('Entrer un nombre : '));
    table.push(nbr);
}

console.log("Tableau des nombres :", table);

for (let j = 0; j < table.length; j++) {
    console.log("Le carré de", table[j], "est", table[j] ** 2);
}
