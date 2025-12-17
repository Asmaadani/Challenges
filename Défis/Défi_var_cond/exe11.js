const p = require('prompt-sync')();

const motDePasse = p("entrer un mot de passe : ");

let ok = false;

for (let i = 1; i <= 3; i++) {
    let entree = p("Entrer votre mot de passe : ");

    if (entree === motDePasse) {
        console.log("Accès autorisé");
        ok = true;
        break;
    } else if (i < 3) {
        console.log("Mot de passe incorrect");
    }
}

if (!ok) {
    console.log("Accès bloqué");
}
