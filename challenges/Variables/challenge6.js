const prompt=require("prompt-sync")();

let v=Number(prompt('entrer la vitesse :'));
let t=Number(prompt('entrer le temps :'));

let distance = v*t;

console.log('la distance='+distance);
