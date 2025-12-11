const prompt = require('prompt-sync')();

function maxTableau() {
    let tab = [];
    let cmb = Number(prompt("Combien de nombres voulez-vous ajouter : "));

    for (let j = 0; j < cmb; j++) {
        let nbr = Number(prompt('Entrez un nombre : '));
        tab.push(nbr);
    }

    let maximum = Math.max(...tab);

    console.log('Tableau :', tab);
    console.log('Le maximum des nombres est :', maximum);
}

maxTableau();
