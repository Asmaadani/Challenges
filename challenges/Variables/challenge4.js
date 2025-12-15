const prompt = require("prompt-sync")();

let a=Number(prompt('entrer la valeur a'));
let b=Number(prompt('entrer la valeur b'));

let addition=a+b;
let soustraction=a-b;
let multiplication=a*b;
let division=a/b;

console.log('a+b='+addition);
console.log('a-b='+soustraction);
console.log('a*b='+multiplication);
console.log('a/='+division);
