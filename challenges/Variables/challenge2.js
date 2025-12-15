const prompt = require("prompt-sync")();


let C=prompt("entrer la valeur de température en °C");
const F=(C*1.8)+32;

console.log('la valeur en °F est :'+F);
