<<<<<<< HEAD
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
=======
const prompt=require('prompt-sync')();

let n=Number(prompt('entrer le nombre :'));
let p=Number(prompt('entrer le puissance :'));

while(n>=0 && p>0){
    console.log(+n,"^",+p,"=",+(n**p));
    break;
}
>>>>>>> 2021f504d5079af09f307544655d7daef95163d2
