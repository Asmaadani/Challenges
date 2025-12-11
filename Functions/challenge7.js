const prompt = require('prompt-sync')();

function produitTableau() {
    let tab = [];
    let ele = Number(prompt('Combien de nombres voulez-vous ajouter : '));

    for (let i = 1; i <= ele; i++) {
        let nbr = Number(prompt('Entrez un nombre : '));
        tab.push(nbr);
    }

    let p = 1; // produit initial

    for (let i = 1; i < tab.length; i++) {
        p *= tab[i]; // multiplication
    }

    console.log("Tableau :", tab);
    console.log("Le produit des nombres =", p);
}

produitTableau();
