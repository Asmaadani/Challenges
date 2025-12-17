const p = require('prompt-sync')();

let pays = p("entrer un pays : ");
let montant = Number(p("entrer un montant : "));

if (montant >= 50 && pays === "france") {
    console.log("la livraison est gratuite");
    console.log("montant total :", montant);
}
else if (montant < 50 && pays === "france") {
    montant = montant + 5;
    console.log("le prix total est :", montant);
}
else {
    montant = montant + 10;
    console.log("le prix total devient :", montant);
}

