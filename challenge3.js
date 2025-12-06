const prompt = require('prompt-sync')();

let array = [];
let choix;

do {
    let nbr = Number(prompt('Entrer un nombre positif <100 et se terminant par 0 : '));

    if (nbr >= 0 && nbr < 100 && nbr % 10 === 0) {
        array.push(nbr);
        console.log("Nombre ajouté avec succès !");
    } else {
        console.log("réssayer autre fois selon les condition");
    }

    choix = prompt("Voulez-vous entrer un autre nombre ? ");

} while (choix.toLowerCase() === 'y');
//j'ai fais toLowerCase pour détecter juste la première lettre s'elle commence par y(Y,Yes,yes,yeah,y...)

let Somme = array.reduce((acc, t) => acc + t, 0);

console.log("Tableau rempli :", array);
console.log("Somme des nombres choisis :", Somme);
console.log("le maximum des nombres choisis :", Math.max(...array));//pour transformer [.., .., ..] → .., .., ..

