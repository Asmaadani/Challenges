const prompt = require('prompt-sync')();

// let nombre = 6;

let nbr=Number(prompt('entrer le nombre à saisir :'));
if (nbr % 2 === 0) {
    console.log('paire');
} else {
    console.log('impaire');
}
