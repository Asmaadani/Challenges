const prompt=require('prompt-sync')();

let n=Number(prompt('entrer le nombre :'));
let p=Number(prompt('entrer le puissance :'));

while(n>=0 && p>0){
    console.log(+n,"^",+p,"=",+(n**p));
    break;
}