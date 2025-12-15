const prompt = require("prompt-sync")();


let n1=Number(prompt ("entrer la note1"));
let n2=Number(prompt ("entrer la note2"));
let n3=Number(prompt ("entrer la note3"));
let n4=Number(prompt ("entrer la note4"));

let Somme=n1+n2+n3+n4;
let Moyenne=Somme/4;

console.log(Somme);
console.log(Moyenne);