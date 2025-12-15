const prompt = require("prompt-sync")();

function compterOccurrences() {
    let tab = [];
    let nbr = Number(prompt("Entrez le nombre de valeurs : "));

    for (let j = 0; j < nbr; j++) {
        let valeur = Number(prompt("Entrez une valeur : "));
        tab.push(valeur);
    }
    let cible = Number(prompt("Quelle valeur voulez-vous vérifier combien de fois est compter dans le tableau ? "));

    let compter = 0;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === cible) {
            compter++;
        }
    }

    console.log("Tableau :", tab);
    console.log('La valeur ',cible ,'apparaît',compter, 'fois.');
}

compterOccurrences();
