const prompt = require('prompt-sync')();

let ch = prompt("Entrer une chaîne de caractères : ");
let array = [];
array.push(ch);

function NbrVoyelles(array) {

    let voyelles = "aeiouyAEIOUY";
    let compteur = 0;

    for (let i = 0; i < array[0].length; i++) {  
        if (voyelles.includes(array[0][i])) {  
            compteur++;
        }
    }

    console.log("Nombre de voyelles :", compteur);
}

NbrVoyelles(array);
