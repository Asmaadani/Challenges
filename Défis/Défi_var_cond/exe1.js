const prompt = require('prompt-sync')();

let cat = prompt("Tu fais quoi dans la vie ? (etudiant / senior / autre) ");
let prix = Number(prompt("Combien le prix ? "));

if (cat === "etudiant") {
  prix = prix - (prix * 20 / 100);
} else if (cat === "senior") {
  prix = prix - (prix * 30 / 100);
} else {
  prix = prix;
}

console.log("Prix final :", prix);
