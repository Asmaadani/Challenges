const prompt = require('prompt-sync')();

function doubler() {

    let tab = [];
    let nbr = Number(prompt('entrer combien de nombre va remplir le tableau :'));

    for (let i = 0; i < nbr; i++) {
        let el = Number(prompt('entrer le nombre : '));
        tab.push(el);
    }

    console.log("Tableau original :", tab);

    let tabtwo = [];
    for (let j = 0; j < tab.length; j++) {
        let double = tab[j] * 2;   
        tabtwo.push(double);
        // let tabtwo = tab.map(x => x * 2);

    }

    console.log("Tableau doublé :", tabtwo);
}

doubler();
