const prompt = require("prompt-sync")();

let n = Number(prompt("Entrer un entier n : "));

function estPremier(nb) {
    if (nb < 2) return false;
    for (let i = 2; i <= Math.sqrt(nb); i++) {
        if (nb % i === 0) {
            return false;
        }
    }
    return true;
}

// Vérifier si n est premier
if (estPremier(n)) {
    console.log("Le nombre", n, "est premier.");
    console.log("Les nombres premiers de 2 à", n - 1, "sont :");

    // Affichage des nombres premiers de 2 à n-1
    for (let i = 2; i < n; i++) {
        if (estPremier(i)) {
            console.log(i);
        }
    }
} else {
    console.log("Le nombre", n, "n'est pas premier.");
}
