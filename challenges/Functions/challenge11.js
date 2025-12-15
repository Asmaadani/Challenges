const prompt = require('prompt-sync')();

function supprimerDoublons() {
    let tab = [];
    let nb = Number(prompt('Entrer combien de fois vous voulez remplir le tableau : '));

    for (let i = 0; i < nb; i++) {
        let ele = Number(prompt('Entrer un element : '));

        if (!tab.includes(ele)) {     
            tab.push(ele);            
        } else {
            console.log(ele, "est un doublon → ignoré.");
        }
    }

    console.log("Tableau sans doublons :", tab);
}

supprimerDoublons();
