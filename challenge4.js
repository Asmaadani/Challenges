const prompt = require('prompt-sync')();

let nbr = prompt("Entrer un nombre : ");

let inverse = nbr.split('').reverse().join('');

console.log(inverse);
