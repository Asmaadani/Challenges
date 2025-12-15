const prompt = require('prompt-sync')();

let array = [];

for (let i = 0; i < 10; i++) {
    let nombre = Number(prompt("Entrer le nombre : "));
    array.push(nombre);
    
    let somme = array.reduce((acc, val) => acc + val, 0);
    
    let moyenne = somme / array.length;
    
    console.log("Tableau actuel:", array);
    console.log("Somme:", somme);
    console.log("Moyenne:", moyenne); 
}
