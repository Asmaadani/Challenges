const prompt=require('prompt-sync')();


let array=[];
for(i=1;i<6;i++){
    const entier=Number(prompt('entrer un entier :'));
    array.push(entier);
}
console.log("array:",array);
