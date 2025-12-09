<<<<<<< HEAD
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
=======
const prompt=require('prompt-sync')();

let ligne=Number(prompt('entrer le nombre de ligne :'));
for(i=1;i<=ligne;i++){
    let etoiles = "*".repeat(2 * i - 1); 
    let décalage=" ".repeat(ligne-i);
    console.log(décalage,etoiles);
}
>>>>>>> 2021f504d5079af09f307544655d7daef95163d2
