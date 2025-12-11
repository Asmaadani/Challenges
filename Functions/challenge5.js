const prompt = require('prompt-sync')();

function inverseTableau() {
    let tab = [];
    let enter = Number(prompt("Combien d'éléments voulez-vous ajouter ? "));

    for (let j = 0; j < enter; j++) {
        let elm = Number(prompt("Entrez un élément : "));
        tab.push(elm);
    }

    console.log("Tableau original :", tab);

    // On inverse le tableau
    let reverse = tab.slice().reverse(); // slice() pour ne pas modifier l'original

    console.log("Tableau inversé :", reverse);
}

inverseTableau();
