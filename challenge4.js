<<<<<<< HEAD
const prompt=require('prompt-sync')();

let chaine=[];
for (i=0; i<3; i++){
    let mots=prompt('entrer une chaine de caractère :');
    chaine.push(mots);
}
let search=prompt('Entrez la chaine à rechercher :');
let trouve = false; 
for(i=0;i<chaine.length;i++){
    if (chaine[i] === search) {
        console.log("La chaîne", search, "a été trouvée à l'indice :", i);
        trouve = true;  
        break;
    }
}
if (!trouve) {        
    console.log("La chaîne n'existe pas.");
}
=======
const prompt = require('prompt-sync')();

let nbr = prompt("Entrer un nombre : ");

let inverse = nbr.split('').reverse().join('');

console.log(inverse);
>>>>>>> 2021f504d5079af09f307544655d7daef95163d2
