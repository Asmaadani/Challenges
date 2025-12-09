const prompt = require('prompt-sync')();

let table = [];
let ch = prompt("Entrer une chaîne de caractères : ");
table.push(ch);

function NbrVoyelles(table) {
    let voyelles = "aeiouyAEIOUY";
    let compteur = 0;

    for (let i = 0; i < table.length; i++) {
        let mot = table[i];
        for (let j = 0; j < mot.length; j++) {
            if (voyelles.includes(mot[j])) {
                compteur++;
            }
        }
    }

    console.log("Nombre de voyelles :", compteur);
}

NbrVoyelles(table);
