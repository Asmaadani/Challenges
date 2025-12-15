const prompt = require('prompt-sync')();

let tableau = [];
for (let i = 1; i < 5; i++) {
    let int = Number(prompt('Entrer un entier : '));
    tableau.push(int);
}

if (tableau.length !== 0) {
    for (let j = 0; j < tableau.length; j++) {
        let carre = tableau[j] **2;   // ou tableau[j] ** 2
        console.log("Le carré de " + tableau[j] + " est : " + carre);
    }
} else {
    console.log("Le tableau est vide");
}
