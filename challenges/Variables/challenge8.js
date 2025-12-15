const prompt=require("prompt-sync")();

let chiffre=prompt('entrer 3 chiffres');

console.log(chiffre.split('').reverse().join(''));