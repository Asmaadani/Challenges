const p = require('prompt-sync')();

let tab = [];

for (let i = 0; i < 3; i++) {
    let nbr = Number(p("Entrer un nombre : "));

    if (!tab.includes(nbr)) {
        tab.push(nbr);
        tab.sort((a, b) => a - b);
    } else {
        console.log("Les nombres doivent être uniques !");
        i--; //pour donner autre chance à rentrer un nbr autre fois
    }
}

console.log(tab);
