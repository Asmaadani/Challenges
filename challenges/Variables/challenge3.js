const prompt = require("prompt-sync")();

let a= 15;
let b= 10;
let c= 20;

a=b;
b=c;
c=a;

console.log(a);
console.log(b);
console.log(c);