const prompt = require('prompt-sync')();

let notes = [];

// Saisie des 3 notes
for (let i = 0; i < 3; i++) {
  let nbr = Number(prompt("Entrer la note " + (i + 1) + " : "));
  notes.push(nbr);
}

// Calcul de la somme
let somme = 0;
for (let j = 0; j < notes.length; j++) {
  somme += notes[j];
}

// Calcul de la moyenne
let moyenne = somme / notes.length;

console.log("La moyenne :", moyenne);

// Décision
if (moyenne >= 16) {
  console.log("Excellent");
} else if (moyenne >= 12 && moyenne < 16) {
  console.log("Bien");
} else if (moyenne >= 10 && moyenne < 12) {
  console.log("Passable");
} else {
  console.log("Échec");
}
